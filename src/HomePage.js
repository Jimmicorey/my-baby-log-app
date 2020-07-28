import React from 'react';


function Timer() {
    return (
        <div className="flex-container">
            <h1>Last Time Baby Was Fed</h1>
            <p className='timer'>00:00:00</p>
        </div>
    )  
}


class HomePage extends React.Component {
    render() {
        return (
        <div>
            <Timer />

            <div className="flex-container">
            <a href='/feedbaby' className='button'>Feed Baby</a>
            <a href='/changediaper' className='button'>Change Diaper</a>
            <a href='/bathtime' className='button'>Bath Time</a>
            </div>
        </div>
        )
    }
}

export default HomePage;