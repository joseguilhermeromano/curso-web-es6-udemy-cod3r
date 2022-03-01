const bodyParser = require('body-parser')
const cors = require('cors')

module.express = app => {
    app.use(bodyParser.json())
    app.use(cors())
}
