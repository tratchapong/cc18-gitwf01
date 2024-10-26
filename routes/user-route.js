const express = require('express')
const { getProfile, updateProfile } = require('../controllers/user-controller')
const userRoute = express.Router()

userRoute.get('/', getProfile)
userRoute.put('/', updateProfile)


module.exports = userRoute