import React from 'react';

const DisplayEvents = (props) => {
    let events = props.events
    events = findEvent(events)
    function findEvent (events) {
        return events.filter(event => event.name.toLowerCase().indexOf(props.searchEvent) > -1 ||
            event.country.toLowerCase().indexOf(props.searchEvent) > -1 ||
            event.address.toLowerCase().indexOf(props.searchEvent) > -1)
    }

    return <section className='displayEvents-container'>
        {events.map(event => props.render(event))}
    </section>
};

export default DisplayEvents;
