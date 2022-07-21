import React from 'react';
import '../css/event.css';

const Event = ({event}) => {


    return (
        <div className = "Event">
            <div className="eventTitle">
                <p className="activity">{event.title} with {event.fullname}</p>
            </div>
            <br />
            <div className="dateTime">
                <p className="date">{event.date.slice(0, 10)}</p>
                <p className="time">{event.starttime} - {event.endtime}</p>
            </div>
            <br />
            <div className="desc">
                <p className="descriptionHeader">Description: </p>
                <p className='description'>{event.description}</p>
            </div>
            
        </div>
    )
}

export default Event;