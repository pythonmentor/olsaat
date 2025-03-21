const Product = require('../models/product');

exports.addListing = async (req, res) => {
    try {
        const { name, description, price, deliveryPrice } = req.body;
        const image = req.file.buffer;

        const product = new Product({
            name,
            description,
            price,
            deliveryPrice,
            image,
        });

        await product.save();
        res.json({ message: 'Product added successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding product' });
    }
};
