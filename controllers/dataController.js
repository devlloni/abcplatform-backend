const Branchoffice = require('../models/Branchoffice');
const Companie = require('../models/Companie');
const Usuario = require('../models/Usuario');
// const { validationResult } = require('express-validator');

exports.getGeneralData = async ( req, res ) => {
    //devolvemos informacion sobre la cantidad de companias, empresas y usuarios.
    try {
        const companies = await Companie.find({});
        const branchoffices = await Branchoffice.find({});
        const empleados = await Usuario.find({ administrador: 0});
        const administradores = await Usuario.find({ administrador: {$gt: 0}});

        return res.status(200).json({
            companies: companies.length,
            branchoffices: branchoffices.length,
            empleados: empleados.length,
            administradores: administradores.length
        });

    } catch (error) {
        return res.status(403).json({
            msg: 'Error inesperado'
        });
    }
} 

exports.testing = async ( req, res ) => {
    console.log('asd');
}