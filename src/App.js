import React from 'react';
import {Routes, Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage';
import Events from './Components/Events/Events';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/Events' element={<Events/>}/>
    </Routes>
  );
}

export default App;
