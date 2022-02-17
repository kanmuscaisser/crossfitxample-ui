import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Events/Event.scss'
import defaultImg from '../../resources/img/defaultImg.png'

const Event = ({ event }) => {
  const id = event._id
  return <div className='event-card' >
    <h1 className='event-title'>{event.name}</h1>
    <div className='img-container'>
      <img src={event.photo || defaultImg} alt="imgEvent" />
    </div>
    <div className='eventInfo-container'>
      <ul>
        <li className='eventDiscipline'> <span>Director</span> {event.director}</li>
      </ul>
      <div className='links-container'>
        <Link to='/' className='register-link'>Register</Link>
        <Link to={`/event/${id}`} className='detail-link'>Detail</Link>
      </div>
    </div>
  </div>
};

export default Event;
