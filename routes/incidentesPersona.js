const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const IPController = require('../controllers/incidentePersonaController');

router.get('/',
    auth,
    IPController.getIncidentes
);

router.get('/:id',
    auth,
    IPController.getIncidenteId
);

router.post('/',
    auth,
    IPController.postIncidente
);

module.exports = router;