import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {

  const logOut = () => {
    document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    window.location.reload();
  }

  return (
    <div className = "Navbar">
      <div>Goblin Finder</div>
      <div><Link className="nav-link" to="/">Home</Link></div>
      <div><Link className="nav-link" to="/me">Profile</Link></div>
      <div><Link className="nav-link" to="/findEvents">Find Events</Link></div>
      <div><Link className="nav-link" to="/hostEvents">Host Event</Link></div>
      <div><Link className="nav-link" to="/" onClick={logOut}>Logout</Link></div>
    </div>
  )
}


export default Navbar;