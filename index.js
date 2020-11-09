const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/pedirClave', (req, res)=>{
    console.log(req.body);
    res.status(200).json({
     msg: 'Hola!',
     resultado: "Esta todo bien"
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})