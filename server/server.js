const express = require('express')
const path = require('path')
const mealRouter = require('./routes/meals')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use('/api/v1/meals', mealRouter)

server.use(express.static(path.join(__dirname, './public')))

module.exports = server
