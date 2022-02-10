/* GET */
const API = 'http://localhost:3000/api/events'
const getEvents = async (setEventsData) => {
    try {
        const response = await fetch(API,
            {
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            })
        const data = await response.json()
        setEventsData(data)
    } catch (error) {
        setEventsData([])
    }
}

/* GET BY ID */
const getEvent = async (setEvent, id) => {
    try {
        let response = await fetch(`${API}/${id}`, {
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        response = await response.json()
        setEvent(response.data)
    } catch (error) {
        setEvent([])
    }
}


export { getEvents, getEvent }