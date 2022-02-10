import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MainPage from '../components/MainPage/MainPage';
import MainEventsPage from '../components/Events/MainEventsPage';
import EventDetail from '../components/Events/EventDetail';
import Header from '../components/MainPage/Header';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage > <Header /> </MainPage>} />
      <Route path='/events' element={<MainEventsPage > <Header /> </MainEventsPage>} />
      <Route path='/event/:id' element={<EventDetail >  <Header /> </EventDetail>} />
    </Routes>
  );
}

export default App;
