const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const empleadoController = require('../controllers/empleadoController');
const auth = require('../middlewares/auth');

router.post('/', 
    auth,
    empleadoController.crearEmpleado
);

module.exports = router;