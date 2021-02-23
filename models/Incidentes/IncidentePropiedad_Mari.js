const mongoose = require('mongoose');

const IncidentePropiedadSchema = mongoose.Schema({
    
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
    fecha: {
        type:Date,
        require: true
     },
     titulo: {
        type:string,
        require: true
    },
    
    gravedad: {
        type:string,
        enum: ['Sin daño', 'Leve', 'Moderado', 'Mayor', 'Catastrófico'],
        require: true
    },
    investigacionincidente: {
        type:Datestring,
        require: true
    }
    });
    module.exports = mongoose.model('IncidentePropiedad', IncidentePropiedadSchema);