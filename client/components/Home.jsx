import React from 'react';
import {Link} from 'react-router-dom';
import '../css/home.css';

const Home = () => {

  return (
    <div className="Home">
      <Link className="home-link" to="/findevents">Find Event</Link>
      <Link className="home-link" to="/hostevents">Make Event</Link>
    </div>
  )
}

export default Home;