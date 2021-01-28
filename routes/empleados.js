const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const auth = require('../middlewares/auth');

router.post('/', 
    auth,
    empleadoController.crearEmpleado
);

router.post('/delete',
    auth,
    empleadoController.borrarEmpleado
);

router.post('/update',
    auth,
    empleadoController.editarEmpleado
);

module.exports = router;