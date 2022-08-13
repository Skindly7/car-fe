const express = require('express')
const router = express.Router()
const controller = require('../controllers/home')

router.get('/', controller.get_home)

module.exports = router