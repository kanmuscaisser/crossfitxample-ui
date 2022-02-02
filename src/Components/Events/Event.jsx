import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Events/Event.scss'

const Event = ({ event }) => {  
  return <div className='event-card'>
    <h1 className='event-title'>{event.name}</h1>
    <div className='img-container'>
      <img src={event.photo} alt="imgEvent" />
    </div>
    <div className='eventInfo-container'>
      <ul>
        <li className='eventDiscipline'> <span>Discipline</span> {event.discipline}</li>
        <li className='eventCountry'> <span>Country</span> {event.country} </li>
        <li className='eventAdress'> <span>Adress</span> {event.address}</li>
        <li className='eventDate'> <span>Date</span> {event.date} </li>
        <li className='eventDirector'><span>Director</span> {event.director} </li>
      </ul>
      <div className='links-container'>
        <Link to='/' className='register-link'>Register</Link>
        <Link to='/' className='register-link'>Detail</Link>
      </div>
    </div>
  </div>
};

export default Event;
