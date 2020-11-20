const express = require('express');
const router = express.Router();
const companieController = require('../controllers/companieController');

router.post('/',
    companieController.cargarCompania
);

module.exports = router;