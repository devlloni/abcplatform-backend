const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearEmpleado = async (req, res) =>{
    const { cuil } = req.body;
    let usuario = await Usuario.findOne({cuil});
        if(usuario){
            return res.status(403).json({
                msg: 'usuario con ese mismo cuil ya registrado'
            });
        }
    try{
        const insert = async ( ) => {
            usuario = new Usuario(req.body);
            usuario.createdAt = new Date();
            if(req.body.password){
                const salt = await bcryptjs.genSalt(10);
                usuario.password = await bcryptjs.hash(req.body.password, salt); 
            }
            
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

exports.borrarEmpleado = async ( req, res ) => {
    const { id } = req.body;
    if(!id){
        return res.status(400).json({
            msg: 'Invalid query ID'
        });
    }
    let empleado = Usuario.findById(id);
    if(!empleado){
        return res.status(403).json({
            msg: 'No existe ese empleado'
        });
    }
    try {
        await Usuario.findOneAndDelete({_id: id});
        return res.status(200).json({
            msg: `Empleado ID(${id}) eliminado.`
        });
        
    } catch (error) {
        res.status(404).json({
            msg: 'Ocurrió un error inesperado.',
            error: error
        })
    }
}

exports.editarEmpleado = async (req, res) => {
    // console.log(req.body);
    if(!req.body._id){
        return res.status(403).json({
            msg: 'Forbidden'
        });
    }
    let resp = await Usuario.findByIdAndUpdate(req.body._id,  req.body);
    return res.status(200).json({
        msg: 'ok',
        resp: resp
    });
}