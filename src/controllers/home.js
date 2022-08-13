const axios = require('axios')

const get_home = (request, response) => {
    response.render('home')
}

module.exports = {
    get_home
}