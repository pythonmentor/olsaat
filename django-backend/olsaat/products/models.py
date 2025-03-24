from django.db import models


class Product(models.Model):
    name = models.CharField("product name", max_length=255)
    description = models.TextField("product description", blank=True)
    price = models.DecimalField(
        "product price", max_digits=10, decimal_places=2, null=True, blank=True
    )
    image = models.ImageField(upload_to="products/", blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Produit"
        verbose_name_plural = "Produits"
        ordering = ["name"]
