const 

    express             =       require('express'),
    router              =       express.Router(),
    uploadController    =       require('../controllers/uploadImages');

router.post('/simple',
    uploadController.uploadImage
)

router.post('/multiple',
    uploadController.uploadImages
);

module.exports = router;