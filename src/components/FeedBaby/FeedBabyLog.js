import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';

// FeedBabyLog should GET (fetch) DATALOGS from API(database)
// FeedBabyLog should render LIST (array) of DATALOGS from API(database) 
// FeedBabyLog should render 10 MOST RECENT logs


class FeedBabyLog extends React.Component {


  /* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ *////////////////////////
  state = {
    loading: true,
    person: null
  }
  /* //////////////////////////////////////////////////////////////////////////// */

  async componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');

    /* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ */
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    /* /////////////////////////////////////////////////////////////////////////// */

  }
  

  render() {
    return (

      <div>
          <h1>FEED BABY LOG</h1>
    
        <div className='flex-container'>


          {/* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ //////////////////*/}
          <div>
            {this.state.loading || !this.state.person ? (
              <div>loading...</div>
            ) : (
              <div>
                <div>{this.state.person.name.title}</div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
              </div>
            )}
          </div>
          {/* ///////////////////////////////////////////////////////////////////// */}



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