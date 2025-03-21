const express = require('express');
const router = express.Router();
const multer = require('multer');
const addListingController = require('../controllers/addListingController');
const protectRoute = require('../middleware/authMiddleware');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', protectRoute, upload.single('image'), addListingController.addListing);

module.exports = router;
