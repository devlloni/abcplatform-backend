const express = require('express');
const router = express.Router();
const generalDataController = require('../controllers/generalDataController');
const auth = require('../middlewares/auth');

//*------- Agentes materiales ---------*//

router.get('/agentesmateriales',
    auth,
    generalDataController.getAgentesMateriales
);

router.post('/agentesmateriales',
    auth,
    generalDataController.postAgenteMaterial
);

router.post('/agentesmateriales/edit',
    auth,
    generalDataController.editarAgenteMaterial
);

router.post('/agentesmateriales/delete',
    auth,
    generalDataController.deleteAgenteMaterial
);

//*------- Causas Basicas ---------*//

router.get('/causasbasicas',
    auth,
    generalDataController.getCausasBasicas
);

router.post('/causasbasicas',
    auth,
    generalDataController.postCausaBasica
);

router.post('/causasbasicas/edit',
    auth,
    generalDataController.editarCausaBasica
);

router.post('/causasbasicas/delete',
    auth,
    generalDataController.deleteCausaBasica
);

//*------- Causas Gestión ---------*//
//!get
router.get('/causasgestion',
    auth,
    generalDataController.getCausasGestion   
);

//!post
router.post('/causasgestion',
    auth,
    generalDataController.postCausaGestion
);

//!post
router.post('/causasgestion/edit',
    auth,
    generalDataController.editarCausaGestion
);

//!post 
router.post('/causasgestion/delete',
    auth,
    generalDataController.deleteCausaGestion
);

//*------- Causas Inmediatas ---------*//
//!get
router.get('/causasinmediatas',
    auth,
    generalDataController.getCausasInmediatas   
);

//!post
router.post('/causasinmediatas',
    auth,
    generalDataController.postCausaInmediata
);

//!post
router.post('/causasinmediatas/edit',
    auth,
    generalDataController.editarCausaInmediata
);

//!post 
router.post('/causasinmediatas/delete',
    auth,
    generalDataController.deleteCausaInmediata
);

//*------- Formas Accidente ---------*//
//!get
router.get('/formasaccidente',
    auth,
    generalDataController.getFormasAccidentes   
);

//!post
router.post('/formasaccidente',
    auth,
    generalDataController.postFormaAccidente
);

//!post
router.post('/formasaccidente/edit',
    auth,
    generalDataController.editarFormaAccidente
);

//!post 
router.post('/formasaccidente/delete',
    auth,
    generalDataController.deleteFormaAccidente
);

//*------- Formas Accidente ---------*//
//!get
router.get('/naturalezalesion',
    auth,
    generalDataController.getNaturalezaLesion   
);

//!post
router.post('/naturalezalesion',
    auth,
    generalDataController.postNaturalezaLesion
);

//!post
router.post('/naturalezalesion/edit',
    auth,
    generalDataController.editarNaturalezaLesion
);

//!post 
router.post('/naturalezalesion/delete',
    auth,
    generalDataController.deleteNaturalezaLesion
);


//*------- Zona cuerpo afectada ---------*//
//!get
router.get('/zonacuerpoafectada',
    auth,
    generalDataController.getZonaCuerpoAfectada   
);

//!post
router.post('/zonacuerpoafectada',
    auth,
    generalDataController.postZonaCuerpoAfectada
);

//!post
router.post('/zonacuerpoafectada/edit',
    auth,
    generalDataController.editarZonaCuerpoAfectada
);

//!post 
router.post('/zonacuerpoafectada/delete',
    auth,
    generalDataController.deleteZonaCuerpoAfectada
);

router.get('/allData',
    auth,
    generalDataController.getGeneralData
);

module.exports = router;