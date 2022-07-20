import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className = "Navbar">
            <p> Goblin Finder </p>
        <div>
        <Link className = "navbar-link" to = "/">Home</Link>
        <Link className = "navbar-link" to = "/event">Find Event</Link>
        <Link className = "navbar-link" to = "/makeevents">Make Event</Link>
        <Link className = "navbar-link" to = "/profile">Profile</Link>
        <button className="logout" onClick={()=>{
              setIsLoggedIn(false);
              navigate("/login")}}>Logout</button>
        </div>
        </div>
    )
}

export default Navbar;