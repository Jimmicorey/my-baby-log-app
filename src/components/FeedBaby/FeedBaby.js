import React from 'react';
import { Link } from 'react-router-dom';
import DatalogsApiService from '../../services/datalogs-api-service';

class FeedBaby extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      showMessage: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    DatalogsApiService.postNewDatalog('Feed');  
  }

  onButtonClickHandler = (e) => {
    this.setState({showMessage: true});
  }
  
  render() {
    return (

      <div>
        <h1 className='hungry'>I'm Hungry!!</h1>
        
        <div className='flex-container'>

          {this.state.showMessage && 
            <p className='message'>
              Log has been entered, YAY!
            </p>
          }
          
          <form className='feed-me-form' onSubmit={this.handleSubmit} onClick={this.onButtonClickHandler}>
            <div className="flex-container">
              <button className="button">Feed Me!</button>
            </div>
          </form>

          <div className='navigation flex-container-row'>
            <Link to='/feedbabylog' className='button-nav'>Logs</Link>
            <Link to='/homepage' className='button-nav'>Back</Link>
          </div>
        </div>
      </div>

    );
  }
}

export default FeedBaby;