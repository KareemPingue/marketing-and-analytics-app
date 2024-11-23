const express = require('express');
const router = express.Router();
const marketingController = require('../controllers/marketingController');

router.get('/campaigns', marketingController.getCampaigns);
router.post('/create', marketingController.createCampaign);

module.exports = routers;