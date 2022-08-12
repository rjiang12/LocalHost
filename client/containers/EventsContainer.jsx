import React, {useState} from 'react';
import EventsDisplay from '../components/EventsDisplay';
import EventsSearcher from '../components/EventsSearcher';

const EventsContainer = () => {
    
    const [eventsData, setEventsData] = useState([]);

    return (
        <div className = "EventsContainer">
            <EventsSearcher setEventsData={setEventsData}/>
            <EventsDisplay eventsData={eventsData}/>
        </div>
    )
}

export default EventsContainer;