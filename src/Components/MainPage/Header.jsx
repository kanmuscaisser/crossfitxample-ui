import React from 'react';
import '../../Styles/MainPage/Header.scss'

const Header = () => {
    return <header className="header-Container">
            <p className="title">THE HOUSE OF CROSSFIT</p>
            <nav>
            <ul>
                <li> <a href="">LOG IN</a> </li>
                <li> <a href="">HOME</a></li>
                <li> <a href="">EVENTS</a></li>
            </ul>
        </nav>
    </header>
};

export default Header;
