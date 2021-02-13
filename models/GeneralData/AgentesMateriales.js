const mongoose = require('mongoose');

const agentesMaterialesSchema = mongoose.Schema({
    nombreagentematerial: {
        type: String
    }
});

module.exports = mongoose.model('AgentesMateriales', agentesMaterialesSchema);