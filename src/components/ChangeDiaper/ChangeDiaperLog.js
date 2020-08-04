import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';

/** 
 * ChangeDiaperLog should render 10 MOST RECENT logs 
**/

class ChangeDiaperLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datalogs: [] 
    };
  }

  componentDidMount() {
    console.log('ChangeDiaperLog componentDidMount works!');
    
    fetch('http://localhost:8000/api/datalogs/changediaperdata')
    .then(res => res.json())
    .then( datalogs => {
      this.setState({datalogs});
      console.log(datalogs);
    }); 
  }

  render() {
    return (
      <div>
          <h1>CHANGE DIAPER LOG</h1>
        <div className='flex-container'>

          <ul>
              {this.state.datalogs.map(d => 
                <li key={d.id}> 
                  {d.event_category} - {new Date(d.date_created).toLocaleString()}
                </li>
              )}
            </ul>

          <div className='flex-container-row'>
            <Link to='/changediaper' className='button-nav'>Back</Link>
            <Link to='/' className='button-nav'>Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeDiaperLog;













// function getChangeDiaperData(userId) {
//   console.log(`getChangeDiaperData ${userId} runs`)
// }

// componentDidMount() {
//   console.log('ChangeDiaperLog componentDidMount works!');
//   getChangeDiaperData('userId is 12345');
// }

// renderChangeDiaperData() {
//   console.log('renderChangeDiaperData runs');
//   return 'SOME MORE DATA';
// }