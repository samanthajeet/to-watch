require('dotenv').config();
const express = require('express')
      massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();
app.use(express.json())
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })


massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    app.listen( SERVER_PORT, () => {console.log(`Bingpot on ${SERVER_PORT}`)})
})


//endpoints
const ctrl = require('./controller')
app.get(`/api/getList`, ctrl.getList)
app.post(`/api/addToList/:imdbID`, ctrl.addToList)