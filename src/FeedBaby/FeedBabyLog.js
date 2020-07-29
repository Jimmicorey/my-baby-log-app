import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';

/** FeedBabyLog should GET (fetch) DATALOGS from API(database) **/
/** FeedBabyLog should POST a NEW DATALOG to API(database) 
 *  per FeedBaby (form submit) **/
/** FeedBabyLog should render LIST (array) of DATALOGS from API(database) **/


// const DummyData = [
//   "01/01/20 9:30 AM", 
//   "01/01/20 10:30 AM", 
//   "01/01/20 11:30 AM",
//   "01/01/20 12:30 PM"
// ]

// const DataLog = DummyData.map((data) =>
//   <li>{data}</li>
// );

class FeedBabyLog extends React.Component {

  // state = {
  //   date: ,
  //   time:
  // }

  componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!')
  }

  render() {
    return (

      <div>
          <h1>FEED BABY LOG</h1>
    
        <div className='flex-container'>

          <ul>
            <li>01/01/20 9:30 AM</li>
            <li>01/01/20 10:30 AM</li>
            <li>01/01/20 11:30 AM</li>
            <li>01/01/20 12:30 PM</li>
          </ul>

          <div className='flex-container-row'>
            <Link to='/feedbaby' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    
      );
  }
}

export default FeedBabyLog;