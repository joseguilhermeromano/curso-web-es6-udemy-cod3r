const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
let bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('*', cors())

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})