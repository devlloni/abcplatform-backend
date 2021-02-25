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

router.get('/',
    auth,
    empleadoController.getEmpleados
);

router.get('/:id',
    auth,
    empleadoController.getEmpleado
);

module.exports = router;