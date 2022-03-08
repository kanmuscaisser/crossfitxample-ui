import React, { useContext, useMemo } from 'react';
import '../../styles/Events/Display.scss'
import EventsDataContext from '../../context/context.js';
import Display from '../Utils/Display';
import { handleFilters } from '../../util/filters';

const DisplayEvents = ({ render }) => {
    const { searchEvent, eventsData, searchForTime } = useContext(EventsDataContext)
    let events = eventsData.data || []

    events = useMemo(() =>
        handleFilters(events, searchEvent, searchForTime)
        , [searchForTime, searchEvent, eventsData])

    return <section className='display-section'>
        {events.length !== 0 ? events.map(event => render(event)) : <Display name='Events' />}
    </section>
};

export default DisplayEvents;