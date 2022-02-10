import React from 'react';
import Event from './Event';
import DisplayEvents from './DisplayEvents';
import '../../styles/Events/Events.scss'
import '../../styles/Events/Mobile.scss'
import EventsOptions from './EventsOptions';

const Events = () => {   
  return (
    <>
      <main className='events-Main'>
        <EventsOptions/>
        <DisplayEvents         
          render={event => (
            <Event event={event} key={event.id} />
          )}
        />
      </main>
    </>

  )
}

export default Events;
