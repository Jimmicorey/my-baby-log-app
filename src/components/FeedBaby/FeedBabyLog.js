import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';

/**
 * FeedBabyLog should render 10 MOST RECENT logs
**/

class FeedBabyLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datalogs: [] 
    };
  }

  componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');
  
    fetch('http://localhost:8000/api/datalogs/feedbabydata')
    .then(res => res.json())
    .then( datalogs => {
      this.setState({datalogs});
      console.log(datalogs);
    }); 
  }

  render() {
    return (
      <div>
          <h1>FEED BABY LOG</h1>
        <div className='flex-container'>
         
          <ul>
            {this.state.datalogs.map(d => 
              <li key={d.id}> 
                {d.event_category} {d.date_created}
              </li>
            )}
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















// function getFeedBabyData(userId) {
//   console.log(`getFeedBabyData ${userId} runs`)

//   return fetch(`${config.API_ENDPOINT}/${userId}/feedbabydata`, {
//     headers: {
//       'authorization': `basic ${TokenService.getAuthToken()}`,
//     },
//   })
//     .then(res =>
//       (!res.ok)
//         ? res.json().then(e => Promise.reject(e))
//         : res.json()
//     )
// }

  // renderFeedBabyData() {
  //   console.log('renderFeedBabyData runs');
  //   return 'SOME MORE DATA';
  // }