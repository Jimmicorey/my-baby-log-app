import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';

/** FeedBabyLog should GET (fetch) DATALOGS from API(database) **/
/** FeedBabyLog should render LIST (array) of DATALOGS from API(database) 
 *  FeedBabyLog should render 10 MOST RECENT logs **/

function getFeedBabyData(userId) {
  console.log(`getFeedBabyData ${userId} runs`)
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

class FeedBabyLog extends React.Component {

  // state = {
  //   "what goes in here???"
  // }

  componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');
    getFeedBabyData('userId is 12345');
  }

  renderFeedBabyData() {
    console.log('renderFeedBabyData runs');
    return 'SOME MORE DATA';
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
            <li>{this.renderFeedBabyData()}</li>
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