import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';

/** BathTimeLog should GET (fetch) DATALOGS from API(database) **/
/** BathTimeLog should POST a NEW DATALOG to API(database) 
 *  per BathTime (form submit) **/
/** BathTimeLog should render LIST (array) of DATALOGS from API(database) 
 *  BathTimeLog should render 10 MOST RECENT logs **/


// const DummyData = [
//   "01/01/20 7:30 PM", 
//   "01/04/20 6:30 PM", 
//   "01/07/20 7:00 PM"
// ]

// const DataLog = DummyData.map((data) =>
//   <li>{data}</li>
// );


class BathTimeLog extends React.Component {

  // state = {
  //   "what goes in here???"
  // }

  componentDidMount() {
    console.log('BathTimeLog componentDidMount works!')
  }
  
  render() {
    return (

      <div>
          <h1>BATH TIME LOG</h1>
    
        <div className='flex-container'>

          <ul>
            <li>01/01/20 7:30 PM</li>
            <li>01/04/20 6:30 PM</li>
            <li>01/07/20 7:00 PM</li>
          </ul>

          <div className='flex-container-row'>
            <Link to='/bathtime' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    
    );
  }
}

export default BathTimeLog;