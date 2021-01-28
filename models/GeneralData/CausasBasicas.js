const mongoose = require('mongoose');

const causasbasicasSchema = mongoose.Schema({
    nombrecasusasbasicas: {
        type: String
    }
});

module.exports = mongoose.model('CausasBasicas', causasbasicasSchema);