import React from 'react';
import axios from 'axios';

const EventMaker = () => {

    //function to run when button is clicked
    const handleSubmit = async (values) => {

        let response = await axios.post('/api/events/makeevent',{
            payload : {
                ...values
            }
        })
    }

    return (
        <div className = "EventMaker">
            
        </div>
    )
}

export default EventMaker;