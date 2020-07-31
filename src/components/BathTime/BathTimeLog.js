import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';

/** BathTimeLog should GET (fetch) DATALOGS from API(database) **/
/** BathTimeLog should render LIST (array) of DATALOGS from API(database) 
 *  BathTimeLog should render 10 MOST RECENT logs **/



class BathTimeLog extends React.Component {

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
          <h1>BATH TIME LOG</h1>
    
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