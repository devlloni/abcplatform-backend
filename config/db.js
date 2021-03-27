const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const conectarDB = async () => {
    try{
        //  await mongoose.connect(process.env.DB_MONGO_TEST, {
        await mongoose.connect(process.env.DB_MONGO_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('[ + ] ¡Base de datos conectada!')
    } catch (error){
        console.log('Error al conectar a la base de datos'); 
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB