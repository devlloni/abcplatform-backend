const mongoose = require('mongoose');

const causasbasicasSchema = mongoose.Schema({
    nombrecausasbasicas: {
        type: String
    }
});

module.exports = mongoose.model('CausasBasicas', causasbasicasSchema);