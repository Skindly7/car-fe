const express = require('express')
const router = express.Router()
const controller = require('../controllers/market')

router.get('/market/:car_id', controller.get_car_details)

module.exports = router