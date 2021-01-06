const mongoose = require('mongoose');

const BranchofficeSchema = mongoose.Schema({
    compania: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    },
    nombre: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true,
    },
    localidad: {
        type: String,
        required: true,
    },
    provincia: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Branchoffice', BranchofficeSchema);