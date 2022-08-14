const axios = require('axios')

const get_cars = (request, response) => {
    axios({
        method: 'get',
        url: 'http://localhost:7010/cars'
    }).then(apiResponse => {
        const carsData = apiResponse.data
        console.log(carsData)
        response.render('cars', { carsData: carsData })
    })
}

const get_car_details = (request, response) => {
    const carID = request.params.car_id
    axios({
        method: 'get',
        url: `http://localhost:7010/cars/${carID}`
    }).then(apiResponse => {
        const carData = apiResponse.data
        console.log(carData)
        response.render('car-details', { car: carData })
    })
}

module.exports = {
    get_cars,
    get_car_details,
}