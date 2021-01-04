const mongoose = require('mongoose');

const sectorSchema = mongoose.Schema({
    nombreSector: {
        type: String
    },
    idCompania: {
        type: mongoose.Types.ObjectId,
        ref: 'Companie'
    }
});

module.exports = mongoose.model('SectorTrabajo', sectorSchema);