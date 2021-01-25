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

//!         --SECTORES--         !//  
router.get('/sectores',
    auth,
    companieController.mostrarSectores
);
router.post('/sectores',
    auth,
    companieController.cargarSector
);

router.post('/sectores/edit',
    auth,
    companieController.editarSector
);

router.post('/sectores/delete',
    auth,
    companieController.eliminarSector
);
//!         --LUGARES--         !//  
router.get('/lugares',
    auth,
    companieController.mostrarLugares
);

router.post('/lugares',
    auth,
    companieController.cargarLugar
);

router.post('/lugares/edit',
    auth,
    companieController.editarLugar
);

router.post('/lugares/delete',
    auth,
    companieController.eliminarLugar
);
//!         --PUESTOS--         !//  

router.get('/puestos',
    auth,
    companieController.mostrarPuestos
);

router.post('/puestos',
    auth,
    companieController.cargarPuesto
);

router.post('/puestos/edit',
    auth,
    companieController.editarPuesto
);

router.post('/puestos/delete',
    auth,
    companieController.eliminarPuesto
);

router.post('/getData', 
    auth,
    companieController.getCompanieSecData
);

module.exports = router;