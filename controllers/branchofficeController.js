const Branchoffice = require('../models/Branchoffice');
const Companie = require('../models/Companie');
const { validationResult } = require('express-validator');

exports.crearBranchoffice = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errores: errors.array()
        });
    }
    try {
        let { compania } = req.body;
        let companie = await Companie.findOne({_id: compania});
        if(!companie){
            return res.status(403).json({
                msg: 'No se encontró la compañía asociada.'
            });
        }
        let sucursal = new Branchoffice(req.body);
        await sucursal.save();
        res.status(200).json({
            msg: 'Sucursal creada con éxito',
            sucursal: sucursal
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'Error catched',
            error: error
        });
    }
}
//Mostrar sucursales

exports.mostrarBranchoffices = async (req, res) => {
    try {
        const branchoffices = await Branchoffice.find({});
        res.status(200).json(branchoffices)
    } catch (error) {
        res.status(400).json({
            msg: 'Error catched',
            error: error
        })
    }
}

exports.getSucursalId = async ( req, res ) => {
    const { id } = req.params;
    if(!id){
        return res.status(203).json({
            msg: 'ERROR, Not ID parsed'
        });
    }
    else{
        let branchoffice = await Branchoffice.findById(id);
        if(branchoffice){
            return res.status(200).json(branchoffice);
        }else{
            return res.status(200).json([]);
        }
    }
}

exports.getSucursalIdCompanie = async ( req, res ) => {
    const { companieId } = req.params; 
    if(!companieId){
        return res.status(203).json({
            msg: 'Error, no ID'
        });
    }
    try {
        const branchoffices = await Branchoffice.find({compania: companieId});
        if(branchoffices){
            return res.status(200).json({branchoffices});
        }else{
            return res.status(200).json([]);
        }
    } catch (error) {
        return res.status(403).json({msg: 'error'});
    }
}

exports.editarSucursal = async ( req, res ) => {
    if(!req.body._id){
        return res.status(403).json({
            msg: 'Forbidden'
        });
    }
    try {
        let resp = await Branchoffice.findByIdAndUpdate(req.body._id, req.body);
        return res.status(200).json({
            msg: 'ok',
            branchoffice: resp
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            msg: 'error'
        });
    }
}