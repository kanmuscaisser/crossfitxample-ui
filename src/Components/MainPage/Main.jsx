import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../resources/img/logo.png'
import '../../styles/MainPage/Main.scss'

const Main = () => {
  return <main className="main-Container">
          <img className="logoImg" src={logoImg} alt="logoImg" />
          <h1 className="h1-title">LIGHT WEIGHT BABYYYYY!!!</h1>
          <h2 className="h2-title">YES SIR!</h2>
          <div className='events-btn'>
            <Link to='/events'>EVENTS</Link>
          </div>
        </main>
};

export default Main;
