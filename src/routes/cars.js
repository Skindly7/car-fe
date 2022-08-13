const express = require('express')
const router = express.Router()
const controller = require('../controllers/cars')

router.get('/', controller.get_cars)
router.get('/:car_id', controller.get_car_details)

module.exports = router