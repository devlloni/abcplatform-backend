const AgentesMateriales = require('../models/GeneralData/AgentesMateriales');
const CausasBasicas = require('../models/GeneralData/CausasBasicas');
const CausasGestion = require('../models/GeneralData/CausasGestion');
const CausasInmediatas = require('../models/GeneralData/CausasInmediatas');
const FormasAccidente = require('../models/GeneralData/FormasAccidente');
const NaturalezaLesion = require('../models/GeneralData/NaturalezaLesion');
const ZonaCuerpoAfectada = require('../models/GeneralData/ZonaCuerpoAfectada');

//*---------- Agentes Materiales -----------*/
//!get
exports.getAgentesMateriales = async ( req, res ) => {
    let agentesMateriales = await AgentesMateriales.find({});
    if(agentesMateriales.length > 0){
        return res.status(200).json({agentesMateriales});
    }else{
        return res.status(200).json({
            AgentesMateriales: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postAgenteMaterial = async ( req, res ) => {
    let { 
        nombreagentematerial
     } = req.body;
     if(!nombreagentematerial){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de agente material',
            code: 0
        });
     }else{
         try {
             let agentematerial = new AgentesMateriales(req.body);
             await agentematerial.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 agentematerial:agentematerial
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarAgenteMaterial = async ( req, res ) => {
    let { _id, nombreagentematerial } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await AgentesMateriales.findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteAgenteMaterial = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let agentematerial = await AgentesMateriales.findById(req.body.id);
        if(!agentematerial){
            return res.status(403).json({
                msg: 'No existe ese agente material'
            });
        }
        await AgentesMateriales.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

//*---------- Causas Basicas -----------*/

exports.getCausasBasicas = async ( req, res ) => {
    let causasbasicas = await CausasBasicas.find({});
    if(causasbasicas.length > 0){
        return res.status(200).json({causasbasicas});
    }else{
        return res.status(200).json({
            CausasBasicas: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postCausaBasica = async ( req, res ) => {
    let { 
        nombrecausasbasicas
     } = req.body;
     if(!nombrecausasbasicas){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de agente material',
            code: 0
        });
     }else{
         try {
             let causabasica = new CausasBasicas({
                nombrecausasbasicas: nombrecausasbasicas
             });
             await causabasica.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 causabasica : causabasica
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarCausaBasica = async ( req, res ) => {
    let { _id, nombrecausasbasicas } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await CausasBasicas .findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteCausaBasica = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let causabasica = await CausasBasicas.findById(req.body.id);
        if(!causabasica){
            return res.status(403).json({
                msg: 'No existe ese agente material'
            });
        }
        await CausasBasicas.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

//*---------- Causas Gestión -----------*/
//!get
exports.getCausasGestion = async ( req, res ) => {
    let causasgestion = await CausasGestion.find({});
    if(causasgestion.length > 0){
        return res.status(200).json({causasgestion});
    }else{
        return res.status(200).json({
            CausasGestion: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postCausaGestion = async ( req, res ) => {
    let { 
        nombrecausasgestion
     } = req.body;
     if(!nombrecausasgestion){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de agente material',
            code: 0
        });
     }else{
         try {
             let causagestion = new CausasGestion(req.body);
             await causagestion.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 causagestion : causagestion
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarCausaGestion = async ( req, res ) => {
    let { _id, nombrecausasgestion } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await CausasGestion .findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteCausaGestion = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let causagestion = await CausasGestion.findById(req.body.id);
        if(!causagestion){
            return res.status(403).json({
                msg: 'No existe esa causa gestión.'
            });
        }
        await CausasGestion.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

//*---------- Causas Inmediatas -----------*/
//!get
exports.getCausasInmediatas = async ( req, res ) => {
    let causasinmediatas = await CausasInmediatas.find({});
    if(causasinmediatas.length > 0){
        return res.status(200).json({causasinmediatas});
    }else{
        return res.status(200).json({
            CausasInmediatas: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postCausaInmediata = async ( req, res ) => {
    let { 
        nombrecausasinmediatas
     } = req.body;
     if(!nombrecausasinmediatas){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de agente material',
            code: 0
        });
     }else{
         try {
             let causasinmediatas = new CausasInmediatas(req.body);
             await causasinmediatas.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 causasinmediatas : causasinmediatas
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarCausaInmediata = async ( req, res ) => {
    let { _id, nombrecausasinmediatas } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await CausasInmediatas.findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteCausaInmediata = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let causainmediata = await CausasInmediatas.findById(req.body.id);
        if(!causainmediata){
            return res.status(403).json({
                msg: 'No existe esa causa inmediata.'
            });
        }
        await CausasInmediatas.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

//*---------- Formas Accidentes -----------*/
//!get
exports.getFormasAccidentes = async ( req, res ) => {
    let formasaccidentes = await FormasAccidente.find({});
    if(formasaccidentes.length > 0){
        return res.status(200).json({formasaccidentes});
    }else{
        return res.status(200).json({
            FormasAccidentes: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postFormaAccidente = async ( req, res ) => {
    let { 
        nombreaccidente
     } = req.body;
     if(!nombreaccidente){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de agente material',
            code: 0
        });
     }else{
         try {
             let formasaccidente = new FormasAccidente(req.body);
             await formasaccidente.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 formasaccidente : formasaccidente
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarFormaAccidente = async ( req, res ) => {
    let { _id, nombrecausasinmediatas } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await FormasAccidente.findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteFormaAccidente = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let formaaccidente = await FormasAccidente.findById(req.body.id);
        if(!formaaccidente){
            return res.status(403).json({
                msg: 'No existe esa causa inmediata.'
            });
        }
        await FormasAccidente.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

//*---------- Naturaleza Lesión -----------*/
//!get
exports.getNaturalezaLesion = async ( req, res ) => {
    let naturalezalesion = await NaturalezaLesion.find({});
    if(naturalezalesion.length > 0){
        return res.status(200).json({naturalezalesion});
    }else{
        return res.status(200).json({
            NaturalezaLesion: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postNaturalezaLesion = async ( req, res ) => {
    let { 
        nombrenaturalezalesion
     } = req.body;
     if(!nombrenaturalezalesion){
        return res.status(200).json({
            msg: 'Error, inserte un nombre de naturaleza lesión',
            code: 0
        });
     }else{
         try {
             let naturalezalesion = new NaturalezaLesion(req.body);
             await naturalezalesion.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 naturalezalesion : naturalezalesion
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarNaturalezaLesion = async ( req, res ) => {
    let { _id, nombrecausasinmediatas } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await NaturalezaLesion.findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteNaturalezaLesion = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let naturalezalesion = await NaturalezaLesion.findById(req.body.id);
        if(!naturalezalesion){
            return res.status(403).json({
                msg: 'No existe esa causa naturaleza de lesión.'
            });
        }
        await NaturalezaLesion.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}


//*---------- ZonaCuerpo Afectada -----------*/
//!get
exports.getZonaCuerpoAfectada = async ( req, res ) => {
    let zonacuerpoafectada = await ZonaCuerpoAfectada.find({});
    if(zonacuerpoafectada.length > 0){
        return res.status(200).json({zonacuerpoafectada});
    }else{
        return res.status(200).json({
            ZonaCuerpoAfectada: [],
            msg: 'No hay existencias'
        });
    }
} 
//!post
exports.postZonaCuerpoAfectada = async ( req, res ) => {
    let { 
        nombrezonacuerpo
     } = req.body;
     if(!nombrezonacuerpo){
        return res.status(200).json({
            msg: 'Error, inserte datos',
            code: 0
        });
     }else{
         try {
             let zonacuerpoafectada = new ZonaCuerpoAfectada(req.body);
             await zonacuerpoafectada.save();
             res.status(200).json({
                 msg: 'ok',
                 code: 1,
                 zonacuerpoafectada : zonacuerpoafectada
             });
         } catch (error) {
             return res.status(404).json({
                 msg: 'Error interno en el server',
                 code: 0
             });
         }
     }
}
//!post
exports.editarZonaCuerpoAfectada = async ( req, res ) => {
    let { _id, nombrecausasinmediatas } = req.body;
    if(!_id){
        return res.status(403).json({
            msg: 'No ID specified'
        });
    }
    let exist = await ZonaCuerpoAfectada.findByIdAndUpdate(req.body._id, req.body);
    if(exist){
        return res.status(200).json({
            msg: 'ok',
            resp: exist
        });
    }
}
//!post
exports.deleteZonaCuerpoAfectada = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'Pasa una ID'
        });
    }
    try {
        let zonacuerpoafectada = await ZonaCuerpoAfectada.findById(req.body.id);
        if(!zonacuerpoafectada){
            return res.status(403).json({
                msg: 'No existe esa causa naturaleza de lesión.'
            });
        }
        await ZonaCuerpoAfectada.findOneAndRemove({_id: req.body.id});
        return res.status(200).json({
            msg: 'Borrado con éxito'
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

exports.getGeneralDataByCompanie = async ( req, res ) => {
    const { companieId } = req.params;
    // if(!companieId){
    //     return res.status(403).json({msg: 'Error, no companie ID.'});
    // }

    // const data = 
    //     Lugares
}