const nodemailer = require('nodemailer');
const Product = require('../models/product');

exports.placeOrder = async (req, res) => {
    const { email, name, phone, address, comment, newsletter, products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ error: 'Products list is required' });
    }



    // Retrieve product details from the database
  try {
    const productIds = products.map(p => p.id);
    const dbProducts = await Product.find({ _id: { $in: productIds } }).lean();

    // Create a map for quick lookup
    const productMap = dbProducts.reduce((map, product) => {
      map[product._id] = product;
      return map;
    }, {});

    // Generate email content
    let emailContent = `
      <h1>Order Details</h1>
      <p>Name: ${name}</p>
      <p>Phone Number: ${phone}</p>
      <p>Address: ${address}</p>
      <h2>Products:</h2>
      <ul>
    `;
    
    let totalPrice = 0;

    products.forEach(({ id, quantity }) => {
      const product = productMap[id];
      if (product) {
        const { name, price } = product;
        const itemTotal = price * quantity;
        emailContent += `
          <li>${name} - Quantity: ${quantity} - Unit Price: ${price} DA - Total: ${itemTotal.toFixed(2)} DA</li>
        `;
        totalPrice += itemTotal;
      }
    });

    emailContent += `
      </ul>
      <h3>Total Price: ${totalPrice.toFixed(2)} DA</h3>
    `;

    // Add user comment and newsletter info
    if (comment) {
      emailContent += `
        <h3>User Comment:</h3>
        <p>${comment}</p>
      `;
    }

    emailContent += `
      <p>Newsletter Subscription: ${newsletter ? 'Yes' : 'No'}</p>
    `;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: [email, process.env.GMAIL_USER],
      subject: 'Order Confirmation',
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Order placed and emails sent' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to process order' });
  }

};
