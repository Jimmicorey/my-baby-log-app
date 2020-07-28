import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';


// const DummyData = [
//   {log: 'FeedBaby', date: '01/01/2020', time: '9:30 AM', type: 'Formula'},
// ]
// function DataLog(props) {
//   return <li>{props.date} : {props.time} : {props.type}</li>
// }


const DummyData = ['Log1', 'Log2', 'Log3']
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