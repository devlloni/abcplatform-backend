const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
router.get('/',
    roleController.getRoles
);

router.get('/test',
    (req,res)=>{
        res.status(200).json({
            mensaje: 'Hola, salio todo ok!!!'
        });
    }
)

module.exports = router;