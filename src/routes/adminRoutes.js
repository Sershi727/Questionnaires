const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Маршруты для создания и редактирования анкет
router.post('/create', adminController.createSurvey);
router.put('/update/:id', adminController.updateSurvey);

module.exports = router;
