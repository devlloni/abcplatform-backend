const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');
//   /api/auth
//POST PARA INICIAR SESION
router.post('/',
    authController.autenticarUsuario
);

// GET, para obtener autenticacion del token
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;