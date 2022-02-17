import React, { useEffect, useState } from 'react'
import '../../styles/Events/EventDetail.scss'
import { useParams } from 'react-router-dom'
import NotFound from '../Utils/NotFound'
import UserForm from './UserForm'
import { getEvent } from '../../util/httpEvents'

const EventDetail = ({ children }) => {
    const [event, setEvent] = useState()
    let params = useParams()
    const { id } = params
    useEffect(() => {
        getEvent(setEvent, id)
        window.scrollTo(0, 0)
    }, [])


    return event ?
        <>
            {children}
            <main className='eventDetail-main'>
                {event ? <UserForm preloadedValues={event} id={id}/> : <NotFound name='Event' />}
            </main>
        </> :
        <div>Loading...</div>
}

export default EventDetail