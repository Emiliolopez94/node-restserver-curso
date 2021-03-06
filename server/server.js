require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('GET USUARIO')
})

app.post('/usuario', function (req, res) {

  let body = req.body


  if(body.nombre === undefined){
    res.status(400).json({
      estado: false,
      mensaje: "Nombre es necesario"
    })
  }else{

    res.json({

      persona: body
    })

  }
  
  
  
})

app.put('/usuario/:id', function (req, res) {

  let id = req.params.id;
  res.json({
    id

  })
})

app.delete('/usuario', function (req, res) {
  res.json('DELETE USUARIO')
})
 
app.listen(process.env.PORT, () => {

    console.log("Conectado al puerto ", process.env.PORT);
})

