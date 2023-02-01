const express = require('express');
const bodyParser= require('body-parser')

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

//   ou

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(3000, function() {
  console.log('listening on 3000')
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/', function(req, res) {
    res.send('Hello World')
  })


  app.post('/quotes', (req, res) => {

    console.log(req.body.nom)
  })
  
  app.get('/college', function(req, res) {
    res.send('Hello College')
  })

  app.get('/qui-sommes-nous', function(req, res) {
    res.send('Nous sommes des experts nodejs')
  })


  
  
  app.get('/page1', (req, res) => {
    res.sendFile(__dirname + '/page1.html')
  })
  
  app.get('/page2', (req, res) => {
    res.sendFile(__dirname + '/page2.html')
  })

  
  
  
  



console.log("bonjour")