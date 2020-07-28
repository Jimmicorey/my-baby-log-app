import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';


// const DummyData = [
//  {log: 'BathTime', date: '01/01/2020', time: '7:30 PM', type: ''},
//  {log: 'BathTime', date: '01/03/2020', time: '7:30 PM', type: ''},
//  {log: 'BathTime', date: '01/05/2020', time: '7:30 PM', type: ''}
// ];


function DataLog(props) {
  return <li>{props.date} : {props.time}</li>
}



function BathTimeLog() {
  return (

    <div>
        <h1>BATH TIME LOG</h1>
  
      <div className='flex-container'>

        <DataLog date="DATE" time="TIME"/>

        <div className='flex-container-row'>
          <Link to='/bathtime' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
    );
}

export default BathTimeLog;