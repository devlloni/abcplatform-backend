const mongoose = require('mongoose');

const IncidentePersona = mongoose.Schema({
    //datos
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    compania: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    },
    sucursal: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Branchoffice',
    },
  
    // codigo: debe ser un código que se genere de forma automatica cada vez que se guarda un incidente
    // va a contener numeros y letras.
    // direccion de la empresa: se toma de la tabla companie
    codigo: String,
    //general
    denuncia: {
        type: String,
        enum:['Denunciado', 'No denunciado', 'Autodenuncia'],
        required: true
        
    },
    tipo: {
        type: String,
        enum:['Accidente de Trabajo', 'Accidente In Itinere'],
        required: true
    },

    numerosiniestro: {
        type: Number,
        required: true
    },
    fechadenuncia: {
        type: Date,
        required: true
    },
    // falta agregar ART, dato que se trae de companie
    numerosiniestro: {
        type: Number
    },
    //Accidente (incidente)
    fechaincidente: {
        type: Date,
        required: true
    },
    sector:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sectorTrabajo'
    },
    lugar:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LugarTrabajo'
    },
    horaingreso: {
        type: String,
        required: true
    },
    horaincidente: {
        type: String,
        required: true
    },
    gravedad: {
        type: String,
        enum: ['Leve', 'Moderado', 'Grave', 'Mortal'],

    },
    turno:{
        type:String,
        required: true          
    },
    jefeacargo: {
        type:  String,
        required: true
    },
    testigos: {
        type: String,
        required: false
    },
    estabaenpuesto:{
        type: Boolean,
        required: true
    },
    trabajohabitual: {
        type: Boolean,
        required: true
    },
    fechaalta: {
        type:Date,
        required: true
    },
    diasbaja:{
        type: Number,
        // required: true
    },
    //falta declarar diasbaja, este campo debe mostrar y guardar la cantidad de dìas que pasaron entre 
    //la fecha de accidente y la fecha de alta
    recalificacion: {
        type: Boolean,
        required: true
    },
    // codificacion de datos del siniestro
    forma:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FormasAccidente'
    },
    agentematerial:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AgentesMateriales'
    },
    // Diagnostico 1
    diagnosticos: Array, // ABC-31

    // naturaleza:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'NaturalezaLesion'
    // },
    // zonacuerpo:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'ZonaCuerpoAfectada'
    // },

    titulo: {
        type: String,
        //required:true
    },
    investigacion:{
        type:String,
        //required: true
    },
    // analisis. Formas del accdidente
    causasinmediatas:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CausasInmediatas'
    },
    descripcioncausainmediata:{
        type: String
    },
    causasbasicas:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CausasBasicas'
    },  
    causasgestion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CausasGestion'
    },
    causasraiz:{
        type:String,
        // required: true
    },
});

module.exports = mongoose.model('IncidentePersona', IncidentePersona);