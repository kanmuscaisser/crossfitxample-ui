import React, { useContext } from 'react';
import '../../styles/Events/Display.scss'
import NotFound from '../Utils/NotFound';
import EventsDataContext from '../../context/context.js';

const DisplayEvents = ({ render }) => {
    const { searchEvent, eventsData } = useContext(EventsDataContext)
    let events = eventsData.data || []
    events = findEvent(events)
    function findEvent(events) {
        return events.filter(event => event.name.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.country.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1 ||
            event.address.toLowerCase().indexOf(searchEvent.toString().toLowerCase()) > -1)
    }

    return <section className='display-section'>
        {events.length !== 0 ? events.map(event => render(event)) : <NotFound name='Events' />}
    </section>
};

export default DisplayEvents;