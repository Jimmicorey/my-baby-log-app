import React from 'react';

function Timer() {
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
            <Timer />
            <a href='/feedbaby' className='button'>Feed Baby</a>
            <a href='/changediaper' className='button'>Change Diaper</a>
            <a href='/bathtime' className='button'>Bath Time</a> 
        </div>  
    )
}

export default HomePage;