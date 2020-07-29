import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';

/** ChangeDiaper should POST a NEW DATA LOG to API Database **/

function ChangeDiaper() {
  return (

    
    <div>

      <h1>How was my diaper?</h1>

      <div className='flex-container'>

        <div className="flex-container">
          <button className="button">Wet</button>
          <button className="button">Poopy</button>
          <button className="button">Both</button>
        </div>

        <div className='flex-container-row'>
          <Link to='/changediaperlog' className='button-nav'>Log</Link>
          <Link to='/' className='button-nav'>Back</Link>
        </div>

      </div>
      
    </div>
    

  );
}

export default ChangeDiaper;