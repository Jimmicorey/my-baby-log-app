import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';


//  {log: 'BathTime', date: '01/01/2020', time: '7:30 PM', type: ''}
// ];
// function DataLog(props) {
//   return <li>{props.date} : {props.time}</li>
// }


const DummyData = [
  "01/01/20 7:30 PM", 
  "01/04/20 6:30 PM", 
  "01/07/20 7:00 PM"
]

const DataLog = DummyData.map((data) =>
  <li>{data}</li>
);


function BathTimeLog() {
  return (

    <div>
        <h1>BATH TIME LOG</h1>
  
      <div className='flex-container'>

        <ul>{DataLog}</ul>

        <div className='flex-container-row'>
          <Link to='/bathtime' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
  );
}

export default BathTimeLog;