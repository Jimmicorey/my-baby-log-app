import React from 'react';
import { Link } from 'react-router-dom';
//import DatalogsApiService from '../../services/datalogs-api-service';
import './BathTimeLog.css';

/** 
 * BathTimeLog should GET (fetch) DATALOGS from API(database)
 * BathTimeLog should render LIST (array) of DATALOGS from API(database) 
 * BathTimeLog should render 10 MOST RECENT logs 
**/


class BathTimeLog extends React.Component {

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
          <h1>BATH TIME LOG</h1>
    
        <div className='flex-container'>

          {/* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ //////////////*/}
          <div>

            <ul id="authors"></ul>

          </div>
          {/* ///////////////////////////////////////////////////////////////////// */}


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







// function getBathTimeData(userId) {
//   console.log(`getBathTimeData ${userId} runs`)
// }

// componentDidMount() {
//   console.log('BathTimeLog componentDidMount works!');
//   getBathTimeData('userId is 12345');
// }

// renderBathTimeData() {
//   console.log('renderBathTimeData runs');
//   return 'SOME MORE DATA';
// }