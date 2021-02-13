const mongoose = require('mongoose');

const IncidenteAmbienteSchema = mongoose.Schema({
    
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    companie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    },
    sucursal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branchoffice'
    },
    lugar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LugarTrabajo'
    },
    sector: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sectorTrabajo'
    },
    fecha: {
    type:Date,
    require: true
    },
    hora: {
        type:Date,
        require: true
    },
  
    titulo: {
        type: String,
        require: true
    },
    
    gravedad: {
        type: String,
        enum: ['Sin daño', 'Leve', 'Moderado', 'Mayor', 'Catastrófico'],
        require: true
    },
    investigacionincidente: {
        type: String,
        require: true
    }
    });
    module.exports = mongoose.model('IncidenteAmbiente', IncidenteAmbienteSchema);