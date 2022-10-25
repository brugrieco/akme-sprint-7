const express = require('express');

const router = express.Router();

const mainAPIController = require('../../controllers/api/mainAPIController');

router.get('/', mainAPIController.index);

router.get('/contact', mainAPIController.contact);

router.get('/help', mainAPIController.help);

router.get('/about', mainAPIController.about);

module.exports = router;

