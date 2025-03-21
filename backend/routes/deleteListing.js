// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const deleteListingController = require('../controllers/deleteListingController');
const protectRoute = require('../middleware/authMiddleware');

// Route to delete a product by its ID
router.delete('/', protectRoute, deleteListingController.deleteListing);

module.exports = router;
