const mongoose = require('mongoose');

const causasinmediatasSchema = mongoose.Schema({
    nombrecausasinmediatas: {
        type: String
    }
   
});

module.exports = mongoose.model('CausasInmediatas', causasinmediatasSchema);