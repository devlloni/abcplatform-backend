const mongoose = require('mongoose');

const sectorSchema = mongoose.Schema({
    nombreSector: {
        type: String,
        required: true
    },
    idCompania: {
        type: mongoose.Types.ObjectId,
        ref: 'Companie',
        required: true
    },
    nombreCompania: {
        type: String
    },
    comentarios: {
        type: String
    }
});

module.exports = mongoose.model('SectorTrabajo', sectorSchema);