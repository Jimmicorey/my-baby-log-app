import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBabyLog.css';
import config from '../../config';

/**
 * FeedBabyLog should render 10 MOST RECENT logs
**/

class FeedBabyLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datalogs: [] 
    };
  }

  componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');
  
    fetch(`${config.API_ENDPOINT}/feedbabydata`)
    .then(res => res.json())
    .then( datalogs => {
      this.setState({datalogs});
      console.log(datalogs);
    }); 

  }

  render() {
    return (
      <div className='flex-container'>
          <h1 className='feed-baby-log'>FEED BABY LOG</h1>
        <div className='flex-container'>
         
          <ul>
            {this.state.datalogs.map(d => 
              <li key={d.id}> 
                {d.event_category} - {new Date(d.date_created).toLocaleString()}
              </li>
            )}
          </ul>
   
          <div className='navigation flex-container-row'>
            <Link to='/feedbaby' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div> 
    );
  }
}

export default FeedBabyLog;