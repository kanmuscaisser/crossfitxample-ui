import React, { useState } from 'react';
import Header from '../MainPage/Header';
import Event from './Event';
import DisplayEvents from './DisplayEvents';
import { eventsMock } from '../../Util/events';
import SearchEvent from './SearchEvent';
import '../../Styles/Events/Events.scss'

const Events = () => {
  const [eventsData, setEventsData] = useState(eventsMock)
  const [searchEvent, setSearchEvent] = useState([])

  return (
    <>
      <Header />
      <main className='events-Main'>
        <div className='eventsOptions-container'>
          <h1>Events</h1>
          <div className='options-container'>
          <nav>
            <ul>
              <li className='eventOption'> All </li>
              <li className='eventOption'> In progress</li>
              <li className='eventOption'> Upcoming</li>
            </ul>
          </nav>
          </div>          
          <hr />
          <SearchEvent searchEvent={searchEvent} setSearchEvent={setSearchEvent} />
        </div>
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
