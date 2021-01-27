const mongoose = require('mongoose');

const zonacuerpoSchema = mongoose.Schema({
    nombrezonacuerpo: {
        type: String
    }
   
});

module.exports = mongoose.model('ZonaCuerpoAfectada', zonacuerpoSchema);