import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchEvent from './SearchEvent';
import EventsDataContext from '../../context/context.js';

const EventsOptions = () => {
    const { searchEvent, setSearchEvent, setSearchForTime } = useContext(EventsDataContext)

    return <div className='eventsOptions-container'>
        <h1>Events</h1>
        <div className='options-container'>
            <div className='eventsButtons-container'>
                <Link to='/create-event' className='createEvent-btn'>Create event</Link>
                <Link to='/' className='createEvent-btn'>My events</Link>
            </div>
            <nav>
                <ul onClick={(e) => setSearchForTime(e.target.innerText)}>
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
