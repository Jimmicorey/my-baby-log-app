import React from 'react';
import { Link } from 'react-router-dom';
import './BathTime.css';
import DatalogsApiService from '../../services/datalogs-api-service';

class BathTime extends React.Component {

////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////    IT WORKS !!!!!!!!!!!!!
  handleSubmit(e) {
    e.preventDefault();
    console.log('Bath Time submit button works!!!');
    DatalogsApiService.postNewDatalog('NEW BATH');
  }
//////////////////////////////////////////////////////////    IT WORKS !!!!!!!!!!!!!
////////////////////////////////////////////////////////////////////////////////////

  render() {

    const date = new Date(); //<--- this is not returning the correct values yet!!!

    return (

      <div>
        <header>
          <h1>Last Time Baby Had A Bath</h1>
          <p className='date'>
              {date.toLocaleDateString()}
          </p>
        </header>

        <div className='flex-container'>
          <form className='feed-me-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Bath Time</button>
            </div>
          </form>

          <div className='flex-container-row'>
            <Link to='/bathtimelog' className='button-nav'>Logs</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>
        </div>
      </div>

    );
  }
}

export default BathTime;