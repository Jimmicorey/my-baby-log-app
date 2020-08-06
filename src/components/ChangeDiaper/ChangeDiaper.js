import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';
import DatalogsApiService from '../../services/datalogs-api-service';


class ChangeDiaper extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('Change Diaper submit button works!!!');
    DatalogsApiService.postNewDatalog('DIAPER CHANGE');
  }

  render() {
    return (
      
      <div>

        <h1>How was my diaper?</h1>

        <div className='flex-container'>
          <form className='change-diaper-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Change Diaper</button>
            </div>
          </form>

          <div className='flex-container-row'>
            <Link to='/changediaperlog' className='button-nav'>Logs</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>

        </div>
        
      </div>
      
    );
  }
}

export default ChangeDiaper;