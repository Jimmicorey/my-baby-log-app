import React from 'react';
import { Link } from 'react-router-dom';
import FeedBabyTimer from './FeedBabyTimer';

function HomePage() {
    return (
        <div className="flex-container">

            <FeedBabyTimer />

            <Link 
                to='/feedbaby' 
                className='button'
            >
                Feed Baby
            </Link>

            <Link 
                to='/changediaper' 
                className='button'
            >
                Change Diaper
            </Link>

            <Link 
                to='/bathtime' 
                className='button'
            >
                Bath Time
            </Link> 

            <Link 
                to='/' 
                className='button aboutpage-back'
            >
                Back
            </Link>
            
        </div>  
    )
}

export default HomePage;