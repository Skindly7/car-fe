const express = require('express')
const router = express.Router()
const controller = require('../controllers/market')

router.get('/:car_id', controller.get_car_market_details)

module.exports = router