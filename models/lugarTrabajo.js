const mongoose = require('mongoose');

const lugarSchema = mongoose.Schema({
    
    nombreLugar: {
        type: String
    },
    idCompania: {
        type: mongoose.Types.ObjectId,
        ref: 'Companie'
    }
    
});

module.exports = mongoose.model('LugarTrabajo', lugarSchema);