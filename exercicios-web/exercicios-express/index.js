const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Guilherme'))

app.use('/opa', (req, resp, next) => {
    console.log('Antes...')
    next()
})

app.post('/clientes/relatorio', (req, resp) => {
    resp.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, resp) => {
    // let corpo = ""
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     resp.send(corpo)
    // })

    resp.send(req.body)
})

app.get('/clientes/:id', (req, resp) => {
    resp.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, resp, next) => {

    console.log('Durante...')

    resp.json({
        data: [
            {id:7, name:'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip:0,
        status:200
    })

    // resp.json([
    //     {id:7, name:'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3}
    // ])
    // resp.json({
    //     name: 'ipad 32 gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })
    //resp.send('estou <b>bem!</b>')

    next()
})

app.use('/opa', (req, resp) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Backend executando2...')
})
