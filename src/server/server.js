const express = require('express')
const app = express()

const axios = require('axios')
const cors = require('cors')

const geoNamesURL = 'http://api.geonames.org/searchJSON?q='
const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat='
const weatherbitKey = 'f9fdddf82a194eecbdc6242daf7926a5'
const pixabayURL = 'https://pixabay.com/api/?key='
const pixabayAPI = '17827458-03182b8f02ec95e303211cfa7'

app.use(express.static('dist'))

app.use(cors())

//Exterene API calls
async function getResponse (url) {
    try {
        const response = await axios.get(url)
        const json = await response.data
        return json
    } catch (error) {
        throw error
    }
}

// Function To GET Geo Data
async function getGeoData(city, username = 'jenny_wjertzoch') {
    const url = geoNamesURL + city + '&maxRows=10&username=' + username
    try {
        return await getResponse(url)
    } catch (error) {
        throw error
    }
}

// Function To GET Weather Data
async function getWeatherData(lat, lng) {
    const url = weatherbitURL + lat + '&lon=' + lng + '&key=' + weatherbitKey
    try {
        return await getResponse(url)
    } catch (error) {
        throw error
    }
}

// Function To GET Image Data
async function getImageData(city) {
    const url = pixabayURL + pixabayAPI + '&q=' + city + ' city&image_type=photo'
    try {
        return await getResponse(url)
    } catch (error) {
        throw error
    }
}

//API Route
app.get('/api/v1/travel', async (req, res, next) => {
    const { toCity, date } = req.query

    const { geonames } =  await getGeoData(toCity)
    const { lat, lng } = geonames[0]

    const { data } = await getWeatherData(lat, lng)
    const { temp } = data[0]
    const { description } = data[0]['weather']

    const { hits } = await getImageData(toCity)
    const { webformatURL } = hits[0]

    try {
        return res.json({
            toCity,
            date,
            lat,
            lng,
            temp,
            description,
            webformatURL
        })
    } catch (error) {
        return res.status(500).json({error})
    }
})

// Port the app will listen to
app.listen(8084, function () {
    console.log('Example app listening on port 8084!')
})