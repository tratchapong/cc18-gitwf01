const express = require('express')
const { login, register } = require('../controllers/auth-controller')
const authRoute = express.Router()

authRoute.post('/login', login)
authRoute.post('/register', (register))


module.exports = authRoute