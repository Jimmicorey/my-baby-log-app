import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';


// const DummyData = [
//   {log: 'FeedBaby', date: '01/01/2020', time: '9:30 AM', type: 'Formula'},
//   {log: 'FeedBaby', date: '01/01/2020', time: '10:30 AM', type: 'Milk-Bottle'},
//   {log: 'FeedBaby', date: '01/01/2020', time: '11:30 AM', type: 'Milk-Left'},
//   {log: 'FeedBaby', date: '01/01/2020', time: '12:30 PM', type: 'Milk-Right'}
// ]
 
function DataLog(props) {
  return <li>{props.date} : {props.time} : {props.type}</li>
}


function FeedBabyLog(props) {
  return (

    <div>
        <h1>FEED BABY LOG</h1>
  
      <div className='flex-container'>
        
        <DataLog date="DATE" time="TIME" type="TYPE"/>

        <div className='flex-container-row'>
          <Link to='/feedbaby' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
    );
}

export default FeedBabyLog;