
const handleFilters = (events, searchEvent, searchForTime) => {
    let data = events || []

   
    data = searchForDate()

    if(searchEvent){
        data = searchData()
    }
    
    function searchData() {
        return events.filter(event => event.name.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.country.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.address.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1)

    }

    function searchForDate() {
        const actualDate = new Date().getTime()
        switch (searchForTime) {
            case 'All': return events

            case 'In progress': return events.filter(event => {
                const date = new Date(event.date).getTime()
                if (date <= actualDate) return event
            })

            case 'Upcoming': return events.filter(event => {
                const date = new Date(event.date).getTime()
                if (date > actualDate) return event
            })

            default: return events
        }
    }
    return data
}


export { handleFilters }

