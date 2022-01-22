import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/MainPage/Header.scss'

const Header = () => {
    return <header className="header-Container">
            <p className="title">THE HOUSE OF CROSSFIT</p>
            <nav>
            <ul>
                <li><Link to='/' >LOG IN</Link></li>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/Events'>EVENTS</Link></li>
            </ul>
        </nav>
    </header>
};

export default Header;
