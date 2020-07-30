import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaperLog.css';

/** ChangeDiaperLog should GET (fetch) DATALOGS from API(database) **/
/** ChangeDiaperLog should render LIST (array) of DATALOGS from API(database) 
 *  ChangeDiaperLog should render 10 MOST RECENT logs **/


class ChangeDiaperLog extends React.Component {


  /* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ *////////////////////////
  state = {
    loading: true,
    person: null
  }
  /* //////////////////////////////////////////////////////////////////////////// */

  async componentDidMount() {
    console.log('FeedBabyLog componentDidMount works!');

    /* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ */
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    /* /////////////////////////////////////////////////////////////////////////// */

  }


  render() {
    return (

      <div>
          <h1>CHANGE DIAPER LOG</h1>
    
        <div className='flex-container'>


          {/* DUMMY DATA PLACEHOLDER CODE TO SHOW FUNCTIONING GET REQ //////////////////*/}
          <div>
            {this.state.loading || !this.state.person ? (
              <div>loading...</div>
            ) : (
              <div>
                <div>{this.state.person.name.title}</div>
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
              </div>
            )}
          </div>
          {/* ///////////////////////////////////////////////////////////////////// */}



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