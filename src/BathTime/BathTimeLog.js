import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';


//  {log: 'BathTime', date: '01/01/2020', time: '7:30 PM', type: ''}
// ];
// function DataLog(props) {
//   return <li>{props.date} : {props.time}</li>
// }


const DummyData = ['Log1', 'Log2', 'Log3']
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