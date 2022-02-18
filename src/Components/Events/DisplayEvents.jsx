import React, { useContext } from 'react';
import '../../styles/Events/Display.scss'
import NotFound from '../Utils/NotFound';
import EventsDataContext from '../../context/context.js';

const DisplayEvents = ({ render }) => {
    const { searchEvent, eventsData, searchForTime } = useContext(EventsDataContext)
    let events = eventsData.data || []

    events = findEventsByTime(events)
    events = findEvent(events)
    
    function findEvent(events) {
        return events.filter(event => event.name.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.country.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.address.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1)
    }

    function findEventsByTime(events) {
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

    return <section className='display-section'>
        {events.length !== 0 ? events.map(event => render(event)) : <NotFound name='Events' />}
    </section>
};

export default DisplayEvents;