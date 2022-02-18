import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchEvent from './SearchEvent';
import { getEvents } from '../../util/httpEvents';
import EventsDataContext from '../../context/context.js';

const EventsOptions = () => {
    const { searchEvent, setSearchEvent, eventsData, setEventsData } = useContext(EventsDataContext)
    let events = eventsData.data || []

    const inProgressEvents = (e) => {
        const actualDate = new Date().getTime()
        const eventOption = e.target.innerText

        switch (eventOption) {
            case 'All': getEvents(setEventsData)
                break;

            case 'In progress': setEventsData(events.filter(event => {
                const date = new Date(event.date).getTime()
                if (date <= actualDate) return event
            }))
                break;

            case 'Upcoming': setEventsData(events.filter(event => {
                const date = new Date(event.date).getTime()
                if (date > actualDate) return event
            }))
                break;
        }
    }

    return <div className='eventsOptions-container'>
        <h1>Events</h1>
        <div className='options-container'>
            <div className='eventsButtons-container'>
                <Link to='/create-event' className='createEvent-btn'>Create event</Link>
                <Link to='/' className='createEvent-btn'>My events</Link>
            </div>
            <nav>
                <ul onClick={(e) => inProgressEvents(e)}>
                    <li className='eventOption'> All </li>
                    <li className='eventOption'> In progress</li>
                    <li className='eventOption'> Upcoming</li>
                </ul>
            </nav>
        </div>
        <hr />
        <SearchEvent searchEvent={searchEvent} setSearchEvent={setSearchEvent} />
    </div>
};

export default EventsOptions;
