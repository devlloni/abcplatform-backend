const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearEmpleado = async (req, res) =>{
    const { email,password } = req.body;
    console.log('Email: '+email, " password: "+password );
    let usuario = await Usuario.findOne({email});
        if(usuario){
            return res.status(403).json({
                msg: 'Email ya registrado'
            });
        }
    try{
        const insert = async ( ) => {
            usuario = new Usuario(req.body);
            const salt = await bcryptjs.genSalt(10);
            usuario.password = await bcryptjs.hash(password, salt);
            usuario.save();
            return res.status(200).json({
                msg: 'Usuario creado con éxito',
                usuario: usuario
            });
        }
        insert();
    }catch (error){
        console.log(error);
        return res.status(400).json({
            msg: 'Error inesperado'
        })
    }
}