import React from 'react';
import EventsDisplay from './EventsDisplay';

const EventsSearcher = () => {

    const [eventsData, setEventsData] = useState([]);
    const [userData, setUserData] = useState([]);
    
    const onActivityChange = (e) => {
        //console.log('onActivityChange', e.target.value)
        setActivity(e.target.value);
      }

    const onDateChange = (e) => {
        //console.log('onDateChange', e.target.value)
        setDate(e.target.value);
      }

    const onTimeChange = (e) => {
        //console.log('onTimeChange', e.target.value)
        setTime(e.target.value);
    }


    //function to run when button is clicked
    const getEventsData = async () => {
      try {
        const response = await axios.get('/api/event/',{
            params: {
                date: date,
                activity: activity,
                time: time
              }
        })
        setEventsData(response.data);

    } catch (error) {
        console.log('error in searching for events function')
    }
    }

    return (
        <div className = "EventsSearcher">
            <div className = "find-event">
        
        <label className='form'> Find Event </label>
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
      <input className='date-input' type="date" onChange={onDateChange}/>
        
      <label className='form'> Time </label>
      <input className='start-time-input' type="time" onChange={onTimeChange}/>

      <button onClick = {() => getEventsData()}> Find Event </button>

    </div>
      <EventsDisplay eventsData={eventsData}/>
    </div>
    )
}

export default EventsSearcher;