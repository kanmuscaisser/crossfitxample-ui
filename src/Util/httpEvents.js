/* GET */
const API = 'http://localhost:3000/api/events'
const requestOptions = {
    method: '',
    headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
    }
}

const getEvents = async (setEventsData) => {
    try {
        const response = await fetch(API, requestOptions.headers)
        const data = await response.json()
        setEventsData(data)
    } catch (error) {
        setEventsData([])
    }
}

/* GET BY ID */
const getEvent = async (setEvent, id) => {
    try {
        let response = await fetch(`${API}/${id}`, requestOptions.headers)
        response = await response.json()
        setEvent(response.data)
    } catch (error) {
        setEvent()
    }
}


/* PUT */
const putEvent = async (setResponse, id, eventData) => {
    if (!eventData.photo) delete eventData.photo
    if (!eventData.discipline) delete eventData.discipline
    delete eventData._id
    requestOptions.method = 'PUT'
    requestOptions.body = JSON.stringify(eventData)
    try {
        let response = await fetch(`${API}/${id}`, requestOptions)
        response = await response.json()
        setResponse(response.message)

    } catch (error) {
        setResponse(error)
    }
}

/* POST */
const postEvent = async (setResponse, newEvent) => {
    if (newEvent.photo.length === 0) delete newEvent.photo
    if (!newEvent.discipline) delete newEvent.discipline
    requestOptions.method = 'POST'
    requestOptions.body = JSON.stringify(newEvent)
    try {
        let response = await fetch(API, requestOptions)
        response = await response.json()
        setResponse(response.message)
    } catch (error) {
        setResponse(error)
    }
}



/* DELETE */
const deleteEvent = async (setResponse, id) => {
    requestOptions.method = 'DELETE'
    requestOptions.mode = 'cors'
    requestOptions.body = ''
    let res = false
    try {
        let response = await fetch(`${API}/${id}`, requestOptions)
        response = await response.json()
        setResponse(response.message)
        if (response.message.includes('deleted')) {
            res = true
        }
    } catch (error) {
        setResponse(error)
    }
    return res
}

export { getEvents, getEvent, putEvent, postEvent, deleteEvent }