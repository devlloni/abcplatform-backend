const Companie = require('../models/Companie');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.cargarCompania = async ( req, res ) => {
    //Revisa si hay errores
    const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({
    //         errores: errors.array()
    //     });
    // }
    console.log(req.body);
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

exports.mostrarCompanias = async ( req, res ) => {
    try {
        const companias = await Companie.find({});
        res.status(200).json(companias);
    } catch (error) {
        res.status(400).json({msg: 'Error', error: error})
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