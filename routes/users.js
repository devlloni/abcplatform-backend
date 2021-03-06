const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usuarioController = require('../controllers/userController');
const auth = require('../middlewares/auth');
router.post('/',
    auth,
    usuarioController.crearUsuario
);
router.post('/login',
    [
        check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
        check('password', 'La contraseña es obligatoria y mínima de 6 caractéres.').isLength({min: 6})
    ],
    usuarioController.loginUsuario
);
router.get('/empleados',
    auth,
    usuarioController.getEmpleados
);

module.exports = router;