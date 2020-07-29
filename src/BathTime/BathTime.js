import React from 'react';
import { Link } from 'react-router-dom';
import './BathTime.css';

/** BathTime should POST a NEW DATA LOG to API Database **/
/** BathTime is a FORM TYPE=RADIO */

function BathTime() {
  return (

    <div>
      <header>
        <h1>Last Time Baby Had A Bath</h1>
        <p>00 / 00 / 0000</p>
      </header>

      <div className='flex-container'>
        <div className="flex-container">
          <button className="button">Bath Time</button>
        </div>

        <div className='flex-container-row'>
          <Link to='/bathtimelog' className='button-nav'>Logs</Link>
          <Link to='/' className='button-nav'>Back</Link>
        </div>
      </div>
    </div>

  );
}

export default BathTime;