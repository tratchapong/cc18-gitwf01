require('dotenv').config()
const notFound = require('./middlewares/notFound')

const express = require('express')
const app = express()


app.use(notFound)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on',port) )
