import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';

/** ChangeDiaperLog should GET (fetch) DATALOGS from API(database) **/
/** ChangeDiaperLog should render LIST (array) of DATALOGS from API(database) 
 *  ChangeDiaperLog should render 10 MOST RECENT logs **/

function getChangeDiaperData(userId) {
  console.log(`getChangeDiaperData ${userId} runs`)
  // return fetch(`${config.API_ENDPOINT}/${userId}/feedbabydata`, {
  //   headers: {
  //     'authorization': `basic ${TokenService.getAuthToken()}`,
  //   },
  // })
  //   .then(res =>
  //     (!res.ok)
  //       ? res.json().then(e => Promise.reject(e))
  //       : res.json()
  //   )
}


// const DummyData = [
//   "01/01/20 9:30 AM Poopy", 
//   "01/01/20 10:30 AM Wet", 
//   "01/01/20 11:30 AM Both"
// ]

// const DataLog = DummyData.map((data) =>
//   <li>{data}</li>
// );


class ChangeDiaperLog extends React.Component {

  // state = {
  //   "what goes in here???"
  // }

  componentDidMount() {
    console.log('ChangeDiaperLog componentDidMount works!');
    getChangeDiaperData('userId is 12345');
  }
  render() {
    return (

      <div>
          <h1>CHANGE DIAPER LOG</h1>
    
        <div className='flex-container'>

          <li>01/01/20 9:30 AM Poopy</li>
          <li>01/01/20 10:30 AM Wet</li>
          <li>01/01/20 11:30 AM Both</li>

          <div className='flex-container-row'>
            <Link to='/changediaper' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    
      );
  }
}

export default ChangeDiaperLog;


