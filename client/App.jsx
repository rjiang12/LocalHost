import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MainContainer from "./containers/MainContainer"
// import Form from './components/Form'
// import Login from './components/Login'
// import Matches from './components/Matches'

const App = () => {
    // const [day, setDay] = useState('');
    // const [activity, setActivity] = useState('');
    // const [username, setUsername] = useState('bencauffman');
    // const [userEntries, setUserEntries] = useState([]);
    // const [first, setFirst] = useState('');
    // const [last, setLast] = useState('');
    

    return ( 
        <div className = "App">
            <Router>
                <Route path = "/" component = {MainContainer}/>
                <Route/>
                <Route/>
            </Router>

        </div>
    )

}

export default App;

    // return (
    //     <div id='main'>
        
       
    //         <nav>
    //             <div id='title'>Goblin Finder</div>
    //             <div id='links'>
    //             <Link to="/">
    //                 Home
    //             </Link>
    //             <Link to="/form">
    //                 Profile
    //             </Link>
                
    //             <Link to="/matches">
    //                 Matches
    //             </Link>
    //             </div>

    //         </nav>
    //         <Routes>
    //             <Route
    //                 path="/"
    //                 element={<Login
    //                     day={day}
    //                     setDay={setDay}
    //                     activity={activity}
    //                     setActivity={setActivity}
    //                     userEntries={userEntries}
    //                     setUserEntries={setUserEntries}
    //                     username={username}
    //                     setUsername={setUsername}
    //                     />}
    //                 />
    //             <Route
    //                 path="/form"
    //                 element={<Form
    //                     day={day}
    //                     setDay={setDay}
    //                     activity={activity}
    //                     setActivity={setActivity}
    //                     userEntries={userEntries}
    //                     setUserEntries={setUserEntries}
    //                     username={username}
    //                     setFirst={setFirst}
    //                     setLast={setLast}
    //                     first={first}
    //                     last={last}
    //                 />}
    //             />
    //             <Route
    //                 path="/matches"
    //                 element={<Matches
    //                     day={day}
    //                     setDay={setDay}
    //                     activity={activity}
    //                     setActivity={setActivity}
    //                     userEntries={userEntries}
    //                     setUserEntries={setUserEntries}
    //                     username={username}
    //                     first={first}
    //                     last={last}
    //                 />}
    //             />
    //         </Routes>
            
    //     </div>
    // )

