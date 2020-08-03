import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';
import DatalogsApiService from '../../services/datalogs-api-service';

/** ChangeDiaperLog should POST a NEW DATALOG to API(database) 
 *  per ChangeDiaper (form submit) **/
class Button extends React.Component {

////////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////  REQUIRES CONDITIONALS !!!!!!!!!!!!!

  onClick(event) {
    const value = event.target.value;
    this.props.onSubmit(value);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('Feed Me! submit button works!!!');
    DatalogsApiService.postNewDatalog('NEW FEED');
  }
///////////////////////////////////////////////  REQUIRES CONDITIONALS !!!!!!!!!!!!!
////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <button 
        className='button' 
        value={this.props.value} 
        onClick={e => this.onClick(e)}>
          {this.props.value}
      </button>
    );
  }
}

class ChangeDiaper extends React.Component {
  onSubmit(value) {
    // I have the button value here!
    console.log(`ChangeDiaper ${value} button works!!!!`);
  }

  render() {
    return (
      
      <div>

        <h1>How was my diaper?</h1>

        <div className='flex-container'>

          <div className="flex-container">
            <Button value="Wet" onSubmit={this.onSubmit} />
            <Button value="Poopy" onSubmit={this.onSubmit} />
            <Button value="Both" onSubmit={this.onSubmit} />
          </div>

          <div className='flex-container-row'>
            <Link to='/changediaperlog' className='button-nav'>Log</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>

        </div>
        
      </div>
      
    );
  }
}

export default ChangeDiaper;