import React from 'react';
import '../../Styles/Events/Display.scss'

const NotFound = ({ name }) => {
    return <div className='notFound-container'>
        <h1>{name} not Found</h1>
    </div>;
};

export default NotFound;
