import React from 'react';
import { Link } from 'react-router-dom';
import './BathTime.css';
import config from '../../config';
import DatalogsApiService from '../../services/datalogs-api-service';

class BathTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      date_created: ""
    };
  }

  componentDidMount() {
    console.log('componentDidMount works!');
      
    fetch(`${config.API_ENDPOINT}/bathtimedata`)
    .then(res => res.json())
    .then( datalogs => {
      this.setState({
        date_created: datalogs[datalogs.length-1].date_created
      });
      console.log(datalogs);
    }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Bath Time submit button works!!!');
    DatalogsApiService.postNewDatalog('BATH');
  }

  render() {

    let bathDate = this.state.date_created;

    return (
      <div>

        <header>
          <h1>Last Time Baby Had A Bath</h1>
          <p className='date'>
              {new Date(bathDate).toLocaleDateString()}
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
