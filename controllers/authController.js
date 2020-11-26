const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async ( req, res ) => {
    //Revisa si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errores: errors.array()
        });
    }
    const { email, password } = req.body;
    console.log('Enviado: '+ email, password);
    try {
        //Revisar q sea un usuario registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                msg: 'El usuario no existe'
            });
        }
        //Revisar password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passwordCorrecto){
            return res.status(400).json({msg: 'Contraseña incorrecta'});
        }
        //Si todo es correcto entonces crea y firma el JWT.-
        const payload = {
            usuario: {
                id: usuario.id
            }
        };
        jwt.sign(payload, process.env.secretword, {
            expiresIn: 3600
        }, (error, token)=> {
            if(error) throw error;
            //Mensaje de confirmacion
            res.status(200).json({token, msg: '¡Exito!'})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'ocurrio un error inesperrado'
        })
    }
}

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id);
        res.status(200).json({
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Hubo un error'
        })
    }
}