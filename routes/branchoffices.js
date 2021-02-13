const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const branchofficeController = require('../controllers/branchofficeController');
const auth = require('../middlewares/auth');

router.post('/',
    auth,
    [
        check('compania','La compania enlazada es obligatoria').not().isEmpty(),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('domicilio', 'El domicilio es obligatorio').not().isEmpty(),
        check('localidad', 'La localidad es obligatoria').not().isEmpty(),
        check('provincia', 'La provincia es obligatoria').not().isEmpty(),
        check('telefono', 'El telefono de contacto es obligatorio.').not().isEmpty(),
        check('email', 'El email de contacto es obligaotorio').not().isEmpty()
    ],
    branchofficeController.crearBranchoffice
);

router.get('/',
    auth,
    branchofficeController.mostrarBranchoffices
);

router.get('/:id',
    auth,
    branchofficeController.getSucursalId
);

router.get('/companie/:companieId',
    auth,
    branchofficeController.getSucursalIdCompanie
);

router.post('/update', 
    auth, 
    branchofficeController.editarSucursal
);

module.exports = router;