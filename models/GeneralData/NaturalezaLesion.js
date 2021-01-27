const mongoose = require('mongoose');

const naturalezalesionSchema = mongoose.Schema({
    nombrenaturalezalesion: {
        type: String
    }
   
});

module.exports = mongoose.model('NaturalezaLesion', naturalezalesionSchema);