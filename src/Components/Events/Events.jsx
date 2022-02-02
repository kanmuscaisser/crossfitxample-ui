import React, {useState, useEffect} from 'react';
import Header from '../MainPage/Header';
import Event from './Event';
import DisplayEvents from './DisplayEvents';
import '../../styles/Events/Events.scss'
import '../../styles/Events/Mobile.scss'
import EventsOptions from './EventsOptions';
import { getEvents } from '../../util/httpEvents';

const Events = () => {
  const [searchEvent, setSearchEvent] = useState([])
  const [eventsData, setEventsData] = useState([])
  
  useEffect(() => {
    getEvents(setEventsData)
  }, [])
 
  return (
    <>
      <Header />
      <main className='events-Main'>
        <EventsOptions setEventsData={setEventsData} searchEvent={searchEvent} setSearchEvent={setSearchEvent} eventsData={eventsData} />
        <DisplayEvents
          searchEvent={searchEvent}
          events={eventsData}
          render={event => (
            <Event event={event} key={event.id} />
          )}
        />
      </main>
    </>

  )
}

export default Events;
