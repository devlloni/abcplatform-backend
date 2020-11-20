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
    const {
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
        console.log('siguiendo x aca')
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