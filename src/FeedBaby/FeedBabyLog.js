import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';


// const DummyData = [
//   {log: 'FeedBaby', date: '01/01/2020', time: '9:30 AM', type: 'Formula'},
// ]
// function DataLog(props) {
//   return <li>{props.date} : {props.time} : {props.type}</li>
// }


const DummyData = [
  "01/01/20 9:30 AM Formula", 
  "01/01/20 10:30 AM Bottle", 
  "01/01/20 11:30 AM Left",
  "01/01/20 12:30 PM Right"
]

const DataLog = DummyData.map((data) =>
  <li>{data}</li>
);


function FeedBabyLog(props) {
  return (

    <div>
        <h1>FEED BABY LOG</h1>
  
      <div className='flex-container'>

        <ul>{DataLog}</ul>

        <div className='flex-container-row'>
          <Link to='/feedbaby' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
    );
}

export default FeedBabyLog;