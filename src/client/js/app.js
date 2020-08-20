import { performAction } from "./formHandler"

const HandleTravelData = (function() {
    // Submit Data From Form
    const submitTravelData = document.querySelector('[data-element=travel-data-submit]')
    .addEventListener('click', async (event) => {
        try {
            await performAction(event);

        } catch (error) {
            console.error(error)
        }
    });

    // Remove Search Results By New Button Click
    const fromCity = document.querySelector('[data-element=starting-location]')
    const dataForm = document.querySelector('[data-element=travel-data-form]')
    const removeButton = document.querySelector('[data-element=remove-travel-data]')
    const travelDataSection = document.querySelector('[data-element=travel-data-section]')

    const removeTravelData = removeButton.addEventListener('click', async() => {
        try {
            dataForm.reset()
            travelDataSection.classList.add('invisible')
        } catch (error) {
            console.error(error)
        }
    })

    const init = function() {
        submitTravelData,
        removeTravelData
    }

    return {
        init: init,
    }

})()

document.addEventListener('DOMContentLoaded', HandleTravelData.init)
