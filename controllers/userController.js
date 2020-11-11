const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.loginUsuario = async ( req, res ) => {
    //Extraer informacion de logueo.
    const { email, password } = req.body;
    // Revisamos si hay errores.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            erros: errors.array()
        });
    }
    //Checkeamos si el usuario existe.
    try {
        let usuario = await Usuario.findOne({email});
        //Si el usuario no existe, retornamos el siguiente mensaje:
        if(!usuario){
            return res.status(403).json({
                msg: 'Usuario no encontrado',
                estado: false,
                codigo: 4
            });
        }
        //Revisamos la contraseña a través de bcryptjs.
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passwordCorrecto){
            return res.status(403).json({
                msg:'Contraseña incorrecta',
                estado: false,
                codigo: 5
            });
        }
        //Si pasó la validación, creamos el JWT.
        const payload = { 
            usuario: {
                id: usuario._id
            }
        };
        jwt.sign(payload, process.env.secretword, {
            expiresIn: 3600
        }, ( error, token )=> {
            if(error) throw error;

            //Mensaje de confirmacion.
            res.status(200).json({
                token,
                estado: true,
                msg: 'Acceso autorizado'
            })
        })
    } catch (error) {
        return res.status(400).json({msg: 'Ocurrión un error'});
    }
}

exports.crearUsuario = async (req, res) => {

    //extraer email  y password
    const {email, password, nombre, apellido, administrador} = req.body;

    if(!email || !password || !nombre || !apellido || !administrador){
        return res.status(400).json({
            msg: 'Error, inserte todos los datos'
        });
    }

    try {
        let usuario = await Usuario.findOne({ email });
        if(usuario){
            return res.status(400).json({
                msg: 'Email ya registrado'
            });
        }
        usuario = new Usuario(req.body);
        //* Hashear la contraseña.
        const salt = await bcryptjs.genSalt(10);
        //* Agregarla al objeto de la base de datos.
        usuario.password = await bcryptjs.hash(password, salt);
        
        //Guardamos el usuario en la BD.
        await usuario.save();
    
        //Creamos la firma para el JWT json web token
            //Firma
        const payload = {
            usuario: {
                id: usuario._id
            }
        };
        jwt.sign(payload, process.env.secretword, {
            expiresIn: 3600
        }, ( error, token )=> {
            if(error) throw error;
            //Mensaje de confirmacion
            res.status(200).json({
                token, estado: true
            });
        })

    } catch (error) {
        return res.status(403).json({
            msg: 'Error'
        })
    }
}