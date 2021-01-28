const mongoose = require('mongoose');

const formasaccidenteSchema = mongoose.Schema({
    nombreaccidente: {
        type: String
    }
   
});

module.exports = mongoose.model('FormasAccidente', formasaccidenteSchema);