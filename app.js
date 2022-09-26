const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./src/routes')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(port)
