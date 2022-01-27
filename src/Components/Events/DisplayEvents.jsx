import React from 'react';
import  '../../Styles/Events/Display.scss'

const DisplayEvents = (props) => {
    let events = props.events
    
    events = findEvent(events)
    function findEvent (events) {
        return events.filter(event => event.name.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1 ||
            event.country.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1 ||
            event.address.toLowerCase().indexOf(props.searchEvent.toString().toLowerCase()) > -1)
    }

    return <section className='display-section'>
        {events.map(event => props.render(event))}
    </section>
};

export default DisplayEvents;
