const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5005;
const conectarDB = require('./config/db');

//* Express middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());
//! CONECCCION CON BASE DE DATOS
conectarDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

 //Something to change for example.
//* RUTAS DE API
app.use('/api/usuarios', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/companias', require('./routes/companie'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/branchoffices', require('./routes/branchoffices'));
//Información general, en datos analíticos.
app.use('/api/data', require('./routes/data'));
//Roles
app.use('/api/roles', require('./routes/role'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});