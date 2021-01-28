const mongoose = require('mongoose');

const puestoSchema = mongoose.Schema({

    nombrePuesto: {
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

module.exports = mongoose.model('PuestoTrabajo', puestoSchema);