const mongoose = require('mongoose');

const IncidentePropiedadSchema = mongoose.Schema({

    compania: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    },
    lugar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LugarTrabajo'
    },
    sucursal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branchoffice'
    },
    sector: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectorTrabajo'
    },
    titulo: {
        type: String
    },
    tipoIncidente: {
        type: String,
        enum: ['Ambiente', 'Propiedad']
    },
    gravedad: {
        type: String,
        enum: ['Sin daño', 'Leve', 'Moderado', 'Mayor', 'Catastrofico']
    },
    investigacion: {
        type: String
    },
    imagenes: {
        type: Array
    },
    files: {
        type: Array
    }
});

module.exports = mongoose.model('IncidentePropiedad', IncidentePropiedadSchema);