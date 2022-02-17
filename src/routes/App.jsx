import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MainPage from '../components/MainPage/MainPage';
import MainEventsPage from '../components/Events/MainEventsPage';
import EventDetail from '../components/Events/EventDetail';
import Header from '../components/MainPage/Header';
import CreateEvent from '../components/Events/CreateEvent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage > <Header /> </MainPage>} />
      <Route path='/events' element={<MainEventsPage > <Header /> </MainEventsPage>} />
      <Route path='/event/:id' element={<EventDetail >  <Header /> </EventDetail>} />
      <Route path='/create-event' element={<CreateEvent >  <Header /> </CreateEvent>} />
    </Routes>
  );
}

export default App;
