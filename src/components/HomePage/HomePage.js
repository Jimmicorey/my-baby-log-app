import React from 'react';
import { Link } from 'react-router-dom';


//FeedBabyTimer will COUNT-UP from the last FeedBabyLog entry to current USER LOGIN
function FeedBabyTimer() {
    return (
        <div className="flex-container">
            <h1>Last Time Baby Was Fed</h1>
            <p className='timer'>00:00:00</p>
        </div>
    )  
}


function HomePage() {
    return (
        <div className="flex-container">
            <FeedBabyTimer />
            <Link to='/feedbaby' className='button'>Feed Baby</Link>
            <Link to='/changediaper' className='button'>Change Diaper</Link>
            <Link to='/bathtime' className='button'>Bath Time</Link> 
        </div>  
    )
}

export default HomePage;