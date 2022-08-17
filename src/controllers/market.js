const axios = require('axios')

const get_car_market_details = (request, response) => {
    const carID = request.params.car_id
    axios({
        method: 'get',
        url: `http://localhost:7010/market/${carID}`
    }).then(apiResponse => {
        const carsData = apiResponse.data
        console.log(carsData)
        response.render('market-car', { carsData : carsData})
    })
}


module.exports = {
    get_car_market_details,
}