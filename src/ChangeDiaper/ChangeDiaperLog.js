import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';

/** ChangeDiaperLog should GET (fetch) datalogs from API **/


const DummyData = [
  "01/01/20 9:30 AM Poopy", 
  "01/01/20 10:30 AM Wet", 
  "01/01/20 11:30 AM Both"
]

const DataLog = DummyData.map((data) =>
  <li>{data}</li>
);


function ChangeDiaperLog(props) {
  return (

    <div>
        <h1>CHANGE DIAPER LOG</h1>
  
      <div className='flex-container'>

        <ul>{DataLog}</ul>

        <div className='flex-container-row'>
          <Link to='/changediaper' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
    );
}

export default ChangeDiaperLog;


