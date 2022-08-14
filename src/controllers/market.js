const axios = require('axios')

const get_car_market_details = (request, response) => {
    const carID = request.params.car_id
    // axios({
    //     method: 'get',
    //     url: `http://localhost:7010/market/${carID}`
    // }).then(apiResponse => {
    //     const carData = apiResponse.data
    //     console.log(carData)
        response.render('market-car')
    }



module.exports = {
    get_car_market_details,
}