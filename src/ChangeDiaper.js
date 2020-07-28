import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';



function ChangeDiaper() {
  return (

    
    <div>

      <h1>How was my diaper?</h1>

      <div class='flex-container'>

        <div class="flex-container">
          <button class="button">Wet</button>
          <button class="button">Poopy</button>
          <button class="button">Both</button>
        </div>

        <div class='flex-container-row'>
          <Link to='/changediaperlog' className='button-nav'>Log</Link>
          <Link to='/' className='button-nav'>Back</Link>
        </div>

      </div>
      
    </div>
    

  );
}

export default ChangeDiaper;