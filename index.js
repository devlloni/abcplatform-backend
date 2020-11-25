const express = require('express')
const app = express();
const cors = require('cors');
const port = 5005
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

//* RUTAS DE API
app.use('/api/usuarios', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/companias', require('./routes/companie'));
app.use('/api/empleados', require('./routes/empleados'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});