const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser')
const controller = require('./controller')
const app = express();
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.json())
app.use(cors())

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

const port = 3001

massive(process.env.CONNECTIONSTRINGGG).then(instance => {
      app.set('db',instance)
      console.log('db is connected')
      app.listen(port, ()=>{console.log(`server is now running on ${port}`)})
  }).catch(e => console.log(e))
