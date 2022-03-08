import React from 'react';
import '../../styles/Events/Display.scss'
import { Oval } from 'react-loader-spinner';

const NotFound = ({ name }) => {
    return <div className='notFound-container'>
        <h1>{name} not Found</h1> 
    </div>;
};

export default NotFound;
