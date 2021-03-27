const express = require('express');
const router = express.Router();
const incPropController = require('../controllers/incidentePropiedadController');
const auth = require('../middlewares/auth');

router.get('/',
    auth,
    incPropController.getIncidentesPropiedad
);

router.get('/:id',
    auth,
    incPropController.getIncidentesPropiedadId
);

router.post('/',
    auth,
    incPropController.postIncidentePropiedad
);

router.post('/delete',
    auth,
    incPropController.deleteIncidente
);

module.exports = router;