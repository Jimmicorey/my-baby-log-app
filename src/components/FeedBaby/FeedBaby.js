import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBaby.css';
import DatalogsApiService from '../../services/datalogs-api-service';

class FeedBaby extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('Feed Me! submit button works!!!');
    DatalogsApiService.postNewDatalog('FEED');
  }
  
  render() {
    return (

      <div>
        <h1>I'm Hungry!!</h1>
        
        <div className='flex-container'>
          <form className='feed-me-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Feed Me!</button>
            </div>
          </form>

          <div className='flex-container-row'>
            <Link to='/feedbabylog' className='button-nav'>Logs</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>
        </div>
      </div>

    );
  }
}

export default FeedBaby;