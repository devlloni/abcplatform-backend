const Companie = require('../models/Companie');
const SectorTrabajo = require('../models/sectorTrabajo');
const LugarTrabajo = require('../models/lugarTrabajo');
const PuestoTrabajo = require('../models/puestoTrabajo');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.cargarCompania = async ( req, res ) => {
    //Revisa si hay errores
    const errors = validationResult(req);
    let {
        razonSocial,
        fantasieName,
        cuitCompanie,
        addressCompanie,
        cityCompanie,
        stateCompanie,
        ciiuCompanie,
        artCompanie,
        emailCompanie,
        phoneCompanie
    } = req.body;
    try {
        let companie = await Companie.findOne({cuitCompanie});
        if(companie)
        {
            return res.status(400).json({
                msg: 'Compañía ya registrada bajo mismo CUIT.'
            });
        }
        companie = new Companie(req.body);
        await companie.save();
        res.status(200).json({
            msg: 'ok',
            companie: companie
        });

    } catch (error) {
        return res.status(400).json({
            msg: 'Error',
            error: error
        })
    }
}

exports.cargarSector = async ( req, res ) => {
    let { idCompania, nombreSector } = req.body;
    if(!idCompania || !nombreSector){
        return res.status(404).json({
            msg: 'Faltan datos'
        });
    }
    let exists = await SectorTrabajo.find({idCompania: idCompania, nombreSector: nombreSector});
    if(exists.length > 0){
        return res.status(200).json({
            msg: 'exists'
        });
    }else{
        try {
            let sector = new SectorTrabajo(req.body);
            await sector.save();
            return res.status(200).json({
                msg: 'ok',
                sector: sector
            });
        } catch (error) {
            return res.status(404).json({
                msg: 'An error ocurred in backend.'
            });
        }
    }
    
}

exports.cargarLugar = async ( req, res ) => {
    let { idCompania, nombreLugar } = req.body;
    if(!idCompania || !nombreLugar){
        return res.status(404).json({
            msg:'Faltan datos'
        });
    }
    let exists = await LugarTrabajo.find({idCompania: idCompania, nombreLugar: nombreLugar});
    if(exists.length > 0){

        return res.status(200).json({
            msg: 'exists'
        });

    }else{

        try {
            let lugar = new LugarTrabajo(req.body);
            await lugar.save();
            return res.status(200).json({
                msg: 'ok',
                lugar: lugar
            });
        } catch (error) {
            return res.status(404).json({
                msg: 'An error ocurred in backend.'
            });
        }

    }
}

exports.cargarPuesto = async ( req, res ) => {
    let { idCompania, nombrePuesto } = req.body;

    if(!idCompania || !nombrePuesto){
        return res.status(404).json({
            msg: 'Faltan datos'
        });
    }
    let exist = await PuestoTrabajo.find({idCompania: idCompania, nombrePuesto: nombrePuesto});
    if(exist.length > 0){
        return res.status(200).json({
            msg: 'exists'
        });
    }else{
        try {
            let puesto = new PuestoTrabajo(req.body);
            await puesto.save();
            return res.status(200).json({
                msg: 'ok',
                puesto: puesto
            });
        } catch (error) {
            return res.status(404).json({
                msg: 'An error ocurred in backend'
            });
        }
    }
}

exports.editarPuesto = async ( req, res ) => {
    const { idCompania, nombrePuesto } = req.body;
    if(!req.body._id){
        return res.status(403).json({
            msg: 'No ID for puesto.'
        });
    }
    let exist = await PuestoTrabajo.find({idCompania: idCompania, nombrePuesto: nombrePuesto});
    if(exist.length > 0){
        return res.status(200).json({
            msg: 'exists'
        });
    }else{
        let resp = await PuestoTrabajo.findByIdAndUpdate(req.body._id, req.body);
        return res.status(200).json({
            msg: 'ok',
            resp: resp
        });
    }
    
}

exports.editarLugar = async ( req, res ) => {
    const { idCompania, nombreLugar } = req.body;

    if(!req.body._id){
        return res.status(403).json({
            msg: 'No ID for Lugar'
        });
    }

    let exist = await LugarTrabajo.find({idCompania: idCompania, nombreLugar: nombreLugar});
    if(exist.length > 0){
        return res.status(200).json({
            msg: 'exists'
        });
    }
    else{
        let resp = await LugarTrabajo.findByIdAndUpdate(req.body._id, req.body);
        return res.status(200).json({
            msg: 'ok',
            resp: resp
        });
    }
    
}

exports.editarSector = async ( req, res ) => {
    const { idCompania, nombreSector } = req.body;
    if(!req.body._id){
        return res.status(403).json({
            msg: 'No ID for Sector.'
        });
    }
    let exist = await SectorTrabajo.find({idCompania: idCompania, nombreSector: nombreSector});
    if(exist.length > 0){
        return res.status(200).json({
            msg: 'exists'
        });
    }else{
        let resp = await SectorTrabajo.findByIdAndUpdate(req.body._id, req.body);
        return res.status(200).json({
            msg: 'ok',
            resp: resp
        })
    }
    
}

exports.mostrarCompanias = async ( req, res ) => {
    try {
        const companias = await Companie.find({});
        res.status(200).json(companias);
    } catch (error) {
        res.status(400).json({msg: 'Error', error: error})
    }
}

exports.mostrarSectores = async ( req, res ) => {
    try {
        const sectores = await SectorTrabajo.find({});
        return res.status(200).json({sectores});
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            msg: 'Error',
            error: error
        });
    }
}

exports.mostrarLugares = async ( req, res ) => {
    try {
        const lugares = await LugarTrabajo.find({});
        return res.status(200).json({lugares});
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

exports.mostrarPuestos = async ( req, res ) => {
    try {
        const puestos = await PuestoTrabajo.find({});
        return res.status(200).json({puestos});
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            msg: 'Error',
            error
        });
    }
}

exports.eliminarCompania = async (req, res)=> {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'No existe esa ID o no es una ID válida.'
        });
    }
    try {
        let companie =  await Companie.findById(req.body.id);
        if(!companie){
            return res.status(403).json({
                msg: 'No existe esa compañía'
            });
        }
        await Companie.findOneAndRemove({_id: req.body.id});
        res.status(200).json({
            msg: `Compañía ID(${req.body.id}) eliminada.`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrió un error inesperado.',
            error: error
        })
    }
}

exports.eliminarSector = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'No existe esa ID o no es una ID válida.'
        });
    }
    try {
        let sector =  await SectorTrabajo.findById(req.body.id);
        if(!sector){
            return res.status(403).json({
                msg: 'No existe ese sector'
            });
        }
        await SectorTrabajo.findOneAndRemove({_id: req.body.id});
        res.status(200).json({
            msg: `Sector ID(${req.body.id}) eliminado.`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrió un error inesperado.',
            error: error
        })
    }
}

exports.eliminarLugar = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'No existe esa ID o no es una ID válida.'
        });
    }
    try {
        console.log(req.body.id);
        let lugar =  await LugarTrabajo.findById(req.body.id);
        if(!lugar){
            return res.status(403).json({
                msg: 'No existe ese lugar'
            });
        }
        await LugarTrabajo.findOneAndRemove({_id: req.body.id});
        res.status(200).json({
            msg: `ok    zs`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrió un error inesperado.',
            error: error
        })
    }
}

exports.eliminarPuesto = async ( req, res ) => {
    if(!req.body.id){
        return res.status(403).json({
            msg: 'No existe esa ID o no es una ID válida.'
        });
    }
    try {
        let puesto =  await PuestoTrabajo.findById(req.body.id);
        if(!puesto){
            return res.status(403).json({
                msg: 'No existe ese lugar'
            });
        }
        await PuestoTrabajo.findOneAndRemove({_id: req.body.id});
        res.status(200).json({
            msg: `Puesto ID(${req.body.id}) eliminado.`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrió un error inesperado.',
            error: error
        })
    }
}

exports.editarCompania = async (req, res) => {
    if(!req.body._id){
        return res.status(403).json({
            msg: 'Forbidden'
        });
    }
    let resp = await Companie.findByIdAndUpdate(req.body._id, req.body);
    return res.status(200).json({
        msg: 'ok',
        compania: resp
    });
}

exports.getCompanieSecData = async  ( req, res ) => {
    if(!req.body.companyId){
        return res.status(403).json({
            msg: 'No companyId'
        });
    }
    const { companyId } = req.body;
    let lugares = await LugarTrabajo.find({idCompania: companyId});
    let sectores = await SectorTrabajo.find({idCompania: companyId});
    let puestos = await PuestoTrabajo.find({idCompania: companyId});
    return res.status(200).json({
        msg: 'ok',
        lugares: lugares,
        sectores: sectores,
        puestos: puestos
    });
}