import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';
import config from '../../config';

/** 
 * BathTimeLog should render 10 MOST RECENT logs 
**/

class BathTimeLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datalogs: [] 
    };
  }

  componentDidMount() {   
    fetch(`${config.API_ENDPOINT}/bathtimedata`)
    .then(res => res.json())
    .then( datalogs => { this.setState({datalogs}); }); 
  }
  
  render() {
    return (
      <div className='flex-container'>
          <h1 className='bath-time-log'>BATH TIME LOG</h1>
        <div className='flex-container'>

        <ul>
            {this.state.datalogs.map(d => 
              <li key={d.id}> 
                {d.event_category}: {new Date(d.date_created).toLocaleString()}
              </li>
            )}
          </ul>

          <div className='navigation flex-container-row'>
            <Link to='/bathtime' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BathTimeLog;