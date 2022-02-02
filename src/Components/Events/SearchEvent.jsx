import React from 'react';
import '../../styles/Events/Search.scss'

const SearchEvent = ({ searchEvent, setSearchEvent }) => {
    return <div className='search-container'>
        <input type="search" placeholder='search event' value={searchEvent} onChange={(e) => {setSearchEvent(e.target.value)}} />
    </div>;
};

export default SearchEvent;
