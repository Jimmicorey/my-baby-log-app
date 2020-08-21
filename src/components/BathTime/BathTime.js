import React from 'react';
import { Link } from 'react-router-dom';
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
    fetch(`${config.API_ENDPOINT}/bathtimedata`)
    .then(res => res.json())
    .then( datalogs => {
      this.setState({
        date_created: datalogs[datalogs.length-1].date_created
      });
    }); 
  }

  handleSubmit(e) {
    e.preventDefault();
    DatalogsApiService.postNewDatalog('Bath');
  }

  render() {

    let bathDate = this.state.date_created;

    return (
      <div>

        <header>
          <h1 className='bath'>Last Time Baby Had A Bath</h1>
          <p className='bath-date'>
              {new Date(bathDate).toLocaleDateString()}
          </p>
        </header>

        <div className='flex-container'>
          
          <form className='bath-time-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Bath Time</button>
            </div>
          </form>

          <div className='navigation flex-container-row'>
            <Link to='/bathtimelog' className='button-nav'>Logs</Link>
            <Link to='/homepage' className='button-nav'>Back</Link>
          </div>

        </div>

      </div>

    );
  }
}

export default BathTime;