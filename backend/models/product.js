const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    //deliveryPrice: Number,
    image: Buffer,
});

module.exports = mongoose.model('Product', productSchema);
