const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const companieController = require('../controllers/companieController');
const auth = require('../middlewares/auth');

router.post('/',
    auth,
    [
        check('razonSocial', 'La razón social es obligatoria').not().isEmpty(),
        check('fantasieName', 'El nombre de fantasía es obligatorio').not().isEmpty(),
        check('cuitCompanie', 'El CUIT es obligatorio').not().isEmpty(),
        check('addressCompanie', 'El domicilio es obligatorio').not().isEmpty(),
        check('cityCompanie', 'La localidad es obligatoria').not().isEmpty(),
        check('stateCompanie', 'La provincia es obligatoria').not().isEmpty(),
        check('ciiu', 'El CIIU es obligatorio').not().isEmpty(),
        check('emailCompanie', 'El email es obligatorio').not().isEmpty().isEmail()
    ],
    companieController.cargarCompania
);

router.get('/',
    auth,
    companieController.mostrarCompanias
);

router.post('/delete',
    auth,
    companieController.eliminarCompania
);

router.post('/update',
    auth,
    companieController.editarCompania
);

//Sectores, lugares, y puestos.

router.get('/sectores',
    auth,
    companieController.mostrarSectores
);
router.post('/sectores',
    auth,
    companieController.cargarSector
);

module.exports = router;