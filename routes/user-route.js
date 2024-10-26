const express = require('express')
const { getProfile } = require('../controllers/user-controller')
const userRoute = express.Router()

userRoute.get('/', getProfile)


module.exports = userRoute