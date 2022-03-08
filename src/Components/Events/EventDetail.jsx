import React, { useEffect, useState } from 'react'
import '../../styles/Events/EventDetail.scss'
import { useParams } from 'react-router-dom'
import UserForm from './UserForm'
import { getEvent } from '../../util/httpEvents'
import Display from '../Utils/Display'

const EventDetail = ({ children }) => {
    const [event, setEvent] = useState()
    let params = useParams()
    const { id } = params
    
    useEffect(() => {
        getEvent(setEvent, id)
    }, [event])


    return <>
        {children}
        <main className='eventDetail-main'>
            {event ? <UserForm preloadedValues={event} id={id} /> : <Display name='Event' />}
        </main>
    </>

}

export default EventDetail