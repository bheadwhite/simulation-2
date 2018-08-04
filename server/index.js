const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser')
const controller = require('./controller')
const app = express();
const cors = require('cors')
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db);
    console.log('db is connected')
} )

app.use(bodyParser.json())
app.use(cors())

app.get('/api/houses', controller.getHouses)

const port = 3001
app.listen(port, ()=>{console.log(`server is now running on ${port}`)})