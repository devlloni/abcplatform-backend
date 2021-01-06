const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({

    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    administrador: {
        type: Number,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        // required: true,
        trim: false
    },
    localidad: {
        type: String,
        // required: true,
        trim: false
    },
    provincia: {
        type: String,
        // required: true,
        trim: false
    },
    cuil: {
        type: String,
        // required: true,
        trim: true
    },
    telefonoContacto: {
        type: Number,
        // required: false,
        trim: true
    },
    compania: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    },
    createdAt: {
        type: Date
    },
    fechaIngreso: {
        type: Date
    },
    branchoffice: {
        type: mongoose.Types.ObjectId,
        ref: 'Branchoffice'
    },
    lugar: {
        type: String
    },
    sector: {
        type: String
    },
    userRole:{
        type: mongoose.Types.ObjectId,
        ref: 'Role'
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);