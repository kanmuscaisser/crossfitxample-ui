/* GET */
const getEvents = async (setEventsData) => {
    try {
        const response = await fetch('http://localhost:3000/api/events',
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

export { getEvents }