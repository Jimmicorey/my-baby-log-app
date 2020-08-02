import React from 'react';
import { Link } from 'react-router-dom';
//import DatalogsApiService from '../../services/datalogs-api-service';
import './FeedBabyLog.css';

/**
 * FeedBabyLog should GET (fetch) DATALOGS from API(database)
 * FeedBabyLog should render LIST (array) of DATALOGS from API(database) 
 * FeedBabyLog should render 10 MOST RECENT logs
**/


class FeedBabyLog extends React.Component {

  /* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ *////////////////////////
  componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');

    function createNode(element) {
      return document.createElement(element);
    }

    function append(parent, el) {
      return parent.appendChild(el);
    }

    const ul = document.getElementById('authors');
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
    .then((resp) => resp.json()) //change the data into json
    .then( function(data) {
      let authors = data.results; //get the results
      return authors.map(function(author) { 
        //map results run the following code
        //create and append the <li></li>'s to the <ul></ul>
        let li = createNode('li'),
            span = createNode('span');
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, span);
        append(ul, li);
      })    
    })
    .catch( function(error) {
      //code to handle returned 'error'
      console.log(error);
    });
  }
  ///////////////////////////////////////////////////////////////////////////////////

  render() {
    return (

      <div>
          <h1>FEED BABY LOG</h1>
    
        <div className='flex-container'>

          {/* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ //////////////*/}
          <div>

            <ul id="authors"></ul>

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