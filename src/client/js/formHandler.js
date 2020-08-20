// Action function
async function performAction(event) {
    event.preventDefault()

    const travelDataSection = document.querySelector('[data-element=travel-data-section]')
    travelDataSection.classList.remove('invisible')

    // API Route
    let apiUrl = '/api/v1/travel'

    const fromCity = document.querySelector('[data-element=starting-point]').value
    console.log(fromCity)
    const toCity = document.querySelector('[data-element=end-point]').value
    const date = document.querySelector('[data-element=travel-date]').value


    const startLocation = document.querySelector('[data-element=starting-location]')
    const endLocation = document.querySelector('[data-element=end-location]')
    const startingDate = document.querySelector('[data-element=starting-date]')
    const weatherCondition = document.querySelector('[data-element=weather-condition]')
    const cityView = document.querySelector('[data-element=city-view]')
    const untilDeparture = document.querySelector('[data-element=until-start]')

    startLocation.innerHTML = fromCity

    // Calculatetime difference of two dates
    const dateOne = new Date(date)
    const dateTwo = new Date()
    console.log(dateOne)
    // To calculate the time difference of two dates
    const differenceInTime = dateOne.getTime() - dateTwo.getTime()

    // To calculate the number of days between two dates
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))

    untilDeparture.innerHTML = differenceInDays

    // API Route with queries
    apiUrl += `?toCity=${toCity}&date=${date}`

    //Try and catch error handing
    try {
        const response = await getResponse(apiUrl)
        endLocation.innerHTML = response.toCity
        startingDate.innerHTML = response.date
        temperature.innerHTML = response.temp + '&#8451'
        weatherCondition.innerHTML = response.description
        cityView.src = response.webformatURL

    } catch (error) {
        console.log('error', error)
    }
}

/**
 *
 * @param {*} url
 */
const getResponse = async (url) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

export {
    performAction
}