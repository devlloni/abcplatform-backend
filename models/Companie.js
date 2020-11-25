const mongoose = require('mongoose');

const CompanieSchema = mongoose.Schema({
    razonSocial: {
        type: String,
        required: true
    },
    fantasieName: { 
        type: String,
        required: true
    },
    cuitCompanie:{
        type: String,
        required: true,
        trim: true
    },
    addressCompanie:{
        type: String,
        required: true
    },
    cityCompanie:{
        type: String,
        required: true
    },
    stateCompanie: {
        type: String,
        required: true
    },
    phoneCompanie:{
        type: Number,
        required: false
    },
    emailCompanie:{
        type: String,
        trim: true,
        required: false
    },
    ciiuCompanie:{
        type: Number,
        trim: true,
        required: true
    },
    artCompanie:{
        type: Number,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model('Companie', CompanieSchema);