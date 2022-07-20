import React from 'react';
import axios from 'axios';

const EventMaker = () => {
    const [eventsData, setEventsData] = useState([]);
    //function to run when button is clicked

    const onActivityChange = (e) => {
        //console.log('onActivityChange', e.target.value)
        setActivity(e.target.value);
      }

    const onDateChange = (e) => {
        //console.log('onDateChange', e.target.value)
        setDate(e.target.value);
      }

    const onStartTimeChange = (e) => {
        //console.log('onTimeChange', e.target.value)
        setStartTime(e.target.value);
    }

    const onEndTimeChange = (e) => {
        //console.log('onTimeChange', e.target.value)
        setEndTime(e.target.value);
    }

    const onDescriptionChange = (e) => {
        //console.log('onTimeChange', e.target.value)
        setDescription(e.target.value);
    }

    const makeEvent = async (values) => {

        const response = await axios.post('/api/event/makeevent',{
            payload : {
                ...values
            }
        })
    }

    return (
        <div className = "event-maker">
        
            <label className='form'> Make Event </label>
          <select defaultValue={'climbing'} className='drop-down' label ="activity" onChange={onActivityChange}>
            <option value={'climbing'}>climbing</option>
            <option value={'hiking'}>hiking</option>
            <option value={'yoga'}>yoga</option>
            <option value={'exercising'}>exercising</option>
            <option value={'coffee'}>coffee</option>
            <option value={'beer'}>beer</option>
            <option value={'cocktails'}>cocktails</option>
            <option value={'other beverage'}>other beverage</option>
            <option value={'gym'}>gym</option>
            <option value={'dinner'}>dinner</option>
            <option value={'street fighting'}>street fighting</option>
          </select>

          <label className='form'> Date </label>
          <input className='date-input' type="date" onChange={onDateChange} />
            
          <label className='form'> Start Time </label>
          <input className='start-time-input' type="time" onChange={onStartTimeChange}/>

          <label className='form'> End Time </label>
          <input className='end-time-input' type="time" onChange={onEndTimeChange}/>

          <label className='questions'> Description </label>
          <textarea className='notes-input' onChange={onDescriptionChange}></textarea>

          <button onClick = {() => makeEvent()}> Make Event </button>

        </div>
    )
}

export default EventMaker;