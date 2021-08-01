const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors');
const PORT =3000
const api = require('./routes/api')
const booking = require('./routes/bookcontroller')
const app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/booking',booking)
app.use('/api',api )
app.get('/', function(req, res){
    res.send('Hello from server')
})
app.listen(PORT, function()
{
    console.log('Server running on localhost:' + PORT)
})