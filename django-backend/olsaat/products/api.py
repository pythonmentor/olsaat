from decimal import Decimal

from django.shortcuts import get_object_or_404
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings
from ninja import NinjaAPI, Schema, ModelSchema, Form, File
from ninja.files import UploadedFile
from ninja.security import django_auth_superuser
from pydantic import EmailStr

from .models import Product

api = NinjaAPI()


class ProductInSchema(ModelSchema):
    class Meta:
        model = Product
        fields = ["name", "description", "price"]


class ProductOutSchema(ModelSchema):
    class Meta:
        model = Product
        fields = ["name", "description", "price", "image"]


class DeleteProductSchema(Schema):
    id: int


class ProductItemSchema(Schema):
    id: int
    quantity: int


class OrderSchema(Schema):
    email: EmailStr
    name: str
    phone: str
    address: str
    comment: str = None
    newsletter: bool = False
    products: list[ProductItemSchema]


@api.get("/Listing", response=list[ProductOutSchema])
def list_products(request):
    return Product.objects.all()


@api.post("/Order")
def place_order(request, data: OrderSchema):
    if not data.products:
        return 400, {"error": "Products list is required"}

    # Récupérer les produits existants
    product_ids = [p.id for p in data.products]
    db_products = Product.objects.filter(id__in=product_ids)

    product_map = {product.id: product for product in db_products}

    order_items = []
    total_price = 0

    for item in data.products:
        product = product_map.get(item.id)
        if product:
            item_total = (product.price or 0) * item.quantity
            total_price += item_total
            order_items.append(
                {
                    "name": product.name,
                    "quantity": item.quantity,
                    "price": product.price,
                    "total": item_total,
                }
            )

    # Générer le contenu HTML depuis un template Django
    context = {
        "name": data.name,
        "phone": data.phone,
        "address": data.address,
        "comment": data.comment,
        "newsletter": "Yes" if data.newsletter else "No",
        "products": order_items,
        "total_price": total_price,
    }

    html_message = render_to_string("products/emails/order_confirmation.html", context)

    email = EmailMessage(
        subject="Order Confirmation",
        body=html_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[data.email, settings.DEFAULT_FROM_EMAIL],
    )
    email.content_subtype = "html"
    email.send()
    return {"message": "Order placed and emails sent"}
