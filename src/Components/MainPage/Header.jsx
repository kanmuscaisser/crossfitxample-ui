import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/MainPage/Header.scss'

const Header = () => {
    const [slideClick, setSlideClick] = useState(false)
    return <header className="header-Container">
            <p className="title">THE HOUSE OF CROSSFIT</p>
            <div className='lineOptions' onClick={()=> setSlideClick(!slideClick)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
            </div>
            <nav className={slideClick? 'slide-Menu' : 'slide-MenuOff'}>
            <ul>
                <li><Link to='/' >LOG IN</Link></li>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/Events'>EVENTS</Link></li>
            </ul>
        </nav>
    </header>
};

export default Header;
