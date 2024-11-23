const express = require('express');
const router = express.Router();
const analyticsController = require('.../controlers/analyticsController');

router.get('/dashboard', analyticsController.getDashboardMetrics);
router.get('/predict', analyticsController.getPredictions);

module.exports = router;