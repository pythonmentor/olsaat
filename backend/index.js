const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const app = express();

// Configure CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Route files
const listingRoutes = require('./routes/listing');
const addListingRoutes = require('./routes/addListing');
const deleteListingRoutes = require('./routes/deleteListing');
const orderRoutes = require('./routes/order');

// Use routes
app.use('/api/Listing', listingRoutes);
app.use('/api/AddListing', addListingRoutes);
app.use('/api/DeleteListing', deleteListingRoutes);
app.use('/api/Order', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3000;
        
        // Development HTTP server
        app.listen(PORT, () => {
            console.log(`HTTP Server running on port ${PORT}`);
        });

        /* HTTPS Configuration (for production)
        const httpsServer = https.createServer({
            key: fs.readFileSync('/etc/letsencrypt/live/olsaat.com/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/olsaat.com/fullchain.pem')
        }, app);

        httpsServer.listen(443, () => {
            console.log('HTTPS Server running on port 443');
        });
        */
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });



