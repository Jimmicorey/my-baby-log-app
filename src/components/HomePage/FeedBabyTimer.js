import React from 'react';

/**
 * FeedBabyTimer will COUNT-UP 
 * from the last FeedBabyLog entry 
 * to current USER LOGIN
**/

function FeedBabyTimer() {

    const date = new Date(); //<--- this is not returning the correct values yet!!!

    return (
        <div className="flex-container">
            <h1>Last Time Baby Was Fed</h1>
            <p className='timer'>
                {date.toLocaleTimeString()}
            </p>
        </div>
    )  

}

export default FeedBabyTimer;


//////////////////////////////////////////////////////////

//Possible equation to get the count...
// timer = current browser timestamp - latest 'FEED baby' timestamp
