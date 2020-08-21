import React from 'react';
import { Link } from 'react-router-dom';
import DatalogsApiService from '../../services/datalogs-api-service';


class ChangeDiaper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      showMessage: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    DatalogsApiService.postNewDatalog('Diaper');
  }

  onButtonClickHandler = (e) => {
    this.setState({showMessage: true});
  }

  render() {
    return (
      
      <div>

        <h1 className='diaper'>How's My Diaper?</h1>

        <div className='flex-container'>

          {this.state.showMessage && 
            <p className='message'>
              Log has been entered, YAY!
            </p>
          }

          <form className='change-diaper-form' onSubmit={this.handleSubmit} onClick={this.onButtonClickHandler}>
            <div className="flex-container">
              <button className="button">Change Diaper</button>
            </div>
          </form>

          <div className='navigation flex-container-row'>
            <Link to='/changediaperlog' className='button-nav'>Logs</Link>
            <Link to='/homepage' className='button-nav'>Back</Link>
          </div>

        </div>
        
      </div>
      
    );
  }
}

export default ChangeDiaper;