const 

    express             =       require('express'),
    router              =       express.Router(),
    uploadController    =       require('../controllers/uploadImages');

router.post('/simple',
    uploadController.uploadPdf
)

router.post('/multiple',
    uploadController.uploadPdfs
);

module.exports = router;