import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';


// const DummyData = [
//  {log: 'ChangeDiaper', date: '01/01/2020', time: '1:30 PM', type: 'Poopy'},
// ]
// function DataLog(props) {
//   return <li>{props.date} : {props.time} : {props.type}</li>
// }


const DummyData = ['Log1', 'Log2', 'Log3']
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


