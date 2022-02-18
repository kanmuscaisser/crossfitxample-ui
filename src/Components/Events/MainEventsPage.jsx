import React, { useState, useEffect } from 'react';
import Events from './Events';
import EventsDataContext from '../../context/context.js';
import { getEvents } from '../../util/httpEvents';

const MainEventsPage = ({children}) => {
    const [searchEvent, setSearchEvent] = useState([])
    const [eventsData, setEventsData] = useState([])
    const [searchForTime, setSearchForTime] = useState('')

    useEffect(() => {
        getEvents(setEventsData)
    }, [])

    return (
    <EventsDataContext.Provider value={{searchEvent, setSearchEvent, eventsData, setEventsData, setSearchForTime, searchForTime}}>
        {children}
        <Events/>
    </EventsDataContext.Provider>
    )};

export default MainEventsPage;
