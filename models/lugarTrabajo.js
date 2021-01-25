const mongoose = require('mongoose');

const lugarSchema = mongoose.Schema({
    
    nombreLugar: {
        type: String
    },
    idCompania: {
        type: mongoose.Types.ObjectId,
        ref: 'Companie'
    },
    nombreCompania: {
        type: String
    },
    comentarios: {
        type: String
    }
    
});

module.exports = mongoose.model('LugarTrabajo', lugarSchema);