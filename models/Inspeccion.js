const mongoose = require('mongoose');

const InspeccionSchema = mongoose.Schema({
    companie: {
        type: mongoose.Types.ObjectId,
        ref: 'Companie'
    },
    sucursal: {
        type: mongoose.Types.ObjectId,
        ref: 'Branchoffice'
    },
    lugar: {
        type: String,
        required: true
    },
    sector: {
        type: String
    },
    fecha: {
        type: Date,
    },
    titulo: {
        type: String
    },
    responsable: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario'
    },
    number: {
        type: Number
    },
    actionType: {
        type: String
    },
    responsableEjecucion: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario'
    },
    fechaLimite: {
        type: Date
    },
    fechaRealizada: {
        type: Date
    },
    fechaVerificacion: {
        type: Date
    },
    clasificacion:{
        type: String
    },
    pedido: {
        type: String
    },
    respuesta: {
        type: String
    },
    imagen: {
        type: String
    }
})