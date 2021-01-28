const mongoose = require('mongoose');

const causasgestionSchema = mongoose.Schema({
    nombrecausasgestion: {
        type: String
    }
   
});

module.exports = mongoose.model('CausasGestion', causasgestionSchema);