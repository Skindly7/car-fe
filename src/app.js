// requires
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const appConfig = require('./config/app')
const homeRoutes = require('./routes/home')
const carsRoutes = require('./routes/cars')

// register view engine
app.set('view engine', appConfig.VIEW_ENGINE)
app.set('views', __dirname + appConfig.VIEW_PATH)

// middleware & static files
app.use(express.static(appConfig.STATIC_PATH))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// listen for requests
app.listen(appConfig.PORT)

// routes
app.use('/home', homeRoutes)
app.use('/cars', carsRoutes)

