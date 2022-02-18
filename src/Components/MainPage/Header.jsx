import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/img/crossfit-logo.png'
import '../../styles/MainPage/Header.scss'

const Header = () => {
    const [slideClick, setSlideClick] = useState(false)
    const navClass = slideClick
        ? 'slide-Menu'
        : 'slide-MenuOff'

    return <header className="header-Container">
        <div className='titleLogo-container'>
            <img className='crossfitLogo' src={logo} alt="crossfitLogo" />
            <p className="title">THE HOUSE OF CROSSFIT</p>
        </div>
        <div className='lineOptions' onClick={() => setSlideClick(!slideClick)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
        <nav className={navClass}>
            <ul>
                <li><Link to='/' >LOG IN</Link></li>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/events'>EVENTS</Link></li>
            </ul>
        </nav>
    </header>
};

export default Header;
