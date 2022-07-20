import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div className = "Home">
            <Link className = "home-link" to="/event">Find Event</Link>
            <Link className = "home-link" to="/event">Make Event</Link>
        </div>
    )
}

export default Home;