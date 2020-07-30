import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';

/** ChangeDiaperLog should GET (fetch) DATALOGS from API(database) **/
/** ChangeDiaperLog should render LIST (array) of DATALOGS from API(database) 
 *  ChangeDiaperLog should render 10 MOST RECENT logs **/

function getChangeDiaperData(userId) {
  console.log(`getChangeDiaperData ${userId} runs`)
}

class ChangeDiaperLog extends React.Component {

  // state = {
  //   "what goes in here???"
  // }

  componentDidMount() {
    console.log('ChangeDiaperLog componentDidMount works!');
    getChangeDiaperData('userId is 12345');
  }

  renderChangeDiaperData() {
    console.log('renderChangeDiaperData runs');
    return 'SOME MORE DATA';
  }

  render() {
    return (

      <div>
          <h1>CHANGE DIAPER LOG</h1>
    
        <div className='flex-container'>

          <ul>
            <li>01/01/20 9:30 AM Poopy</li>
            <li>01/01/20 10:30 AM Wet</li>
            <li>01/01/20 11:30 AM Both</li>
            <li>{this.renderChangeDiaperData()}</li>
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


