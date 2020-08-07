import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';
import config from '../../config';

class ChangeDiaperLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datalogs: [] 
    };
  }

  componentDidMount() {    
    fetch(`${config.API_ENDPOINT}/changediaperdata`)
    .then(res => res.json())
    .then( datalogs => { this.setState({datalogs}); }); 
  }

  render() {
    return (
      <div className='flex-container'>
          <h1 className='change-diaper-log'>CHANGE DIAPER LOG</h1>
        <div className='flex-container'>

          <ul>
              {this.state.datalogs.map(d => 
                <li key={d.id}> 
                  {d.event_category} - {new Date(d.date_created).toLocaleString()}
                </li>
              )}
            </ul>

          <div className='navigation flex-container-row'>
            <Link to='/changediaper' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeDiaperLog;