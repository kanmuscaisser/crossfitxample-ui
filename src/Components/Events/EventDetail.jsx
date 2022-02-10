import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getEvent } from '../../util/httpEvents'
import NotFound from '../Utils/NotFound'
import '../../styles/Events/EventDetail.scss'

const EventDetail = ({children}) => {
    const [event, setEvent] = useState([])
    let params = useParams()
    let { id } = params

    useEffect(()=>{
        getEvent(setEvent,id)
    },[])

    return (
        <>
            {children}
            <main className='eventDetail-container'>
                {event? 
                   <h1>{event.name}</h1> 
                :<NotFound name='Event'/>}
            </main>
        </>
    )
}

export default EventDetail