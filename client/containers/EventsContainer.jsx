import React from 'react';
import EventsDisplay from '../components/EventsDisplay';
import EventsSearcher from '../components/EventsSearcher';

const EventsContainer = () => {


    return (
        <div className = "EventsContainer">
            <EventsSearcher/>
            <EventsDisplay/>
        </div>
    )
}

export default EventsContainer;