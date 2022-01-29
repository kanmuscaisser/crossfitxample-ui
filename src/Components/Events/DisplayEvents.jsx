import React from 'react';
import '../../Styles/Events/Display.scss'
import NotFound from '../Utils/NotFound';

const DisplayEvents = (props) => {
    let events = props.events.data || []
    events = findEvent(events)
    function findEvent(events) {
        return events.filter(event => event.name.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1 ||
            event.country.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1 ||
            event.address.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1)
    }

    return <section className='display-section'>
        {events.length !== 0 ? events.map(event => props.render(event)) : <NotFound name='Events' />}
    </section>
};

export default DisplayEvents;
