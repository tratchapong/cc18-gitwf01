require('dotenv').config()
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')
const notFound = require('./middlewares/notFound')

const express = require('express')
const app = express()

app.use(cors())

app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 8888
app.listen(port, ()=> console.log('Server on',port) )
