import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MainPage from '../components/MainPage/MainPage';
import Events from '../components/Events/Events';

function App() { 
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/events' element={<Events />}/>
    </Routes>
  );
}

export default App;
