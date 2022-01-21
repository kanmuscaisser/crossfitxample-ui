import React from 'react';
import logoImg from '../../Resources/img/logo.png'
import '../../Styles/MainPage/Main.scss'

const Main = () => {
  return <main className="main-Container">
          <img className="logoImg" src={logoImg} alt="logoImg" />
          <h1 className="h1-title">LIGHT WEIGHT BABYYYYY!!!</h1>
          <h2 className="h2-title">YES SIR!</h2>
          <button className="eventos-btn" type="button">EVENTS</button>
        </main>
};

export default Main;
