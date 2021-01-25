const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const dataController = require( '../controllers/dataController' );
router.get('/general',
    auth,
    dataController.getGeneralData
);

router.post('/testing',
    dataController.testing
);

module.exports = router;