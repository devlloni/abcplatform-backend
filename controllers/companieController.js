const Companie = require('../models/Companie');
const SectorTrabajo = require('../models/sectorTrabajo');
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
            msg: 'Compañía creada con éxito!',
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
    try {
        let sector = new SectorTrabajo(req.body);
        await sector.save();
        return res.status(200).json({
            msg: '¡Sector creado con éxito!',
            sector: sector
        });
    } catch (error) {
        return res.status(404).json({
            msg: 'An error ocurred in backend.'
        });
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