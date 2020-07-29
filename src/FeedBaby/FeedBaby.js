import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBaby.css';

/** FeedBaby should POST a NEW DATA LOG to API Database **/
/** FeedBaby is a FORM TYPE=RADIO */

function FeedBaby() {
  return (

    <div>

      <h1>I'm Hungry!!</h1>

      <div className='flex-container'>
        <div className="flex-container">
          <button className="button">Feed Me!</button>
        </div>

        <div className='flex-container-row'>
          <Link to='/feedbabylog' className='button-nav'>Logs</Link>
          <Link to='/' className='button-nav'>Back</Link>
        </div>
      </div>
    </div>

  );
}

export default FeedBaby;