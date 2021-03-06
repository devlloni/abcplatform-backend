const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.getEmpleados = async ( req, res ) => {
    
        let empleados = await Usuario.find({});
        return res.status(200).json(empleados);
   
}

exports.getEmpleado = async ( req, res ) => {
    const { id } = req.params;
    if(!id){
        return res.status(403).json({
            msg: 'No id parsed'
        });
    }
        let empleado = await Usuario.find({_id: id});
        if(!empleado) return res.status(203).json({
            msg: 'Not found',
            code: 0
        });
        return res.status(200).json(empleado);
   
}

exports.crearEmpleado = async (req, res) =>{
    const { cuil, lugar, sector } = req.body;
    
    try{
        const insert = async ( ) => {
            usuario = new Usuario(req.body);
            usuario.createdAt = new Date();
            if(req.body.password){
                const salt = await bcryptjs.genSalt(10);
                usuario.password = await bcryptjs.hash(req.body.password, salt); 
            }
            if(!lugar){
                usuario.lugar = null;
            }
            if(!sector){
                usuario.sector = null;
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