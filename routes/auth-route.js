const express = require('express')
const { login } = require('../controllers/auth-controller')
const authRoute = express.Router()

authRoute.post('/login', login)


module.exports = authRoute