// controllers/productController.js
const Product = require('../models/product');

// Delete a product by its ID
exports.deleteListing = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
