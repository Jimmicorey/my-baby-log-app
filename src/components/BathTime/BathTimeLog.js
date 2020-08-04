import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';

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
    console.log('BathTimeLog componentDidMount works!');
      
    fetch('http://localhost:8000/api/datalogs/bathtimedata')
    .then(res => res.json())
    .then( datalogs => {
      this.setState({datalogs});
      console.log(datalogs);
    }); 
  }
  
  render() {
    return (
      <div>
          <h1>BATH TIME LOG</h1>
        <div className='flex-container'>

        <ul>
            {this.state.datalogs.map(d => 
              <li key={d.id}> 
                {d.event_category} - {new Date(d.date_created).toLocaleString()}
              </li>
            )}
          </ul>

          <div className='flex-container-row'>
            <Link to='/bathtime' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BathTimeLog;















// function getBathTimeData(userId) {
//   console.log(`getBathTimeData ${userId} runs`)
// }

// componentDidMount() {
//   console.log('BathTimeLog componentDidMount works!');
//   getBathTimeData('userId is 12345');
// }

// renderBathTimeData() {
//   console.log('renderBathTimeData runs');
//   return 'SOME MORE DATA';
// }