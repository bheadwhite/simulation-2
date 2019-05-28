const express = require('express'),
 massive = require('massive'),
 bodyParser = require('body-parser'),
 controller = require('./controller'),
 app = express(),
 cors = require('cors')
require('dotenv').config()

app.use(cors(), bodyParser.json())

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

const port = 3001

massive(process.env.CONNECTION_STRING).then(instance => {
      app.set('db',instance)
      console.log('db is connected')
    }).catch(e => console.log(e))
    
app.listen(port, ()=>{console.log(`server is now running on ${port}`)})