require('dotenv').config()
const cors = require('cors')
const errorMiddleware = require('./middlewares/error-middleware')
const notFound = require('./middlewares/not-found')

const express = require('express')
const userRoute = require('./routes/user-route')
const authRoute = require('./routes/auth-route')
const app = express()

app.use(cors())

app.use('/user', userRoute)
app.use('/auth', authRoute)

app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on',port) )
