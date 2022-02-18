import React from 'react';
import Main from './Main';
import Footer from './Footer';
import '../../styles/MainPage/Mobile.scss'

const MainPage = ({children}) => {
    return <>
        {children}
        <Main />
        <Footer />
    </>
};

export default MainPage;
