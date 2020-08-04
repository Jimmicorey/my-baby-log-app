import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';
import DatalogsApiService from '../../services/datalogs-api-service';

////////////////////////////////////////////////////////////////////////////////////  
//////////////////   MULTI-BUTTON OPTION NOT WORKING YET   ///////////////////////// 
// class Button extends React.Component {

// /** ChangeDiaperLog should POST a NEW DATALOG to API(database) 
//  *  per ChangeDiaper (form submit) **/

//   onClick(event) {
//     const value = event.target.value;
//     this.props.onSubmit(value);
//   }

//   render() {
//     return (
//       <button 
//         className='button' 
//         value={this.props.value} 
//         onClick={e => this.onClick(e)}>
//           {this.props.value}
//       </button>
//     );
//   }
// }
//////////////////   MULTI-BUTTON OPTION NOT WORKING YET   /////////////////////////  
//////////////////////////////////////////////////////////////////////////////////// 

class ChangeDiaper extends React.Component {
////////////////////////////////////////////////////////////////////////////////////  
//////////////////   MULTI-BUTTON OPTION NOT WORKING YET   ///////////////////////// 
  // onSubmit(e, value) {
  // //   //I have the button value here!
  // //   console.log(`ChangeDiaper ${value} button works!!!!`);
  // // }
  // // handleSubmit(e) {
  //   e.preventDefault();
    
  //   console.log(`ChangeDiaper ${value} button works!!!!`);
  //   DatalogsApiService.postNewDatalog(`NEW ${value} DIAPER`);
  // }
//////////////////   MULTI-BUTTON OPTION NOT WORKING YET   /////////////////////////  
//////////////////////////////////////////////////////////////////////////////////// 


////////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////// SINGLE BUTTON NEW DIAPER   IT WORKS !!!!!!
  handleSubmit(e) {
    e.preventDefault();
    console.log('Change Diaper submit button works!!!');
    DatalogsApiService.postNewDatalog('DIAPER CHANGE');
  }
///////////////////////////////////////// SINGLE BUTTON NEW DIAPER   IT WORKS !!!!!!
////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      
      <div>

        <h1>How was my diaper?</h1>

        <div className='flex-container'>
          {/* SINGLE BUTTON - SINGLE EVENT SOLUTION */}
          <form className='feed-me-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Change Diaper</button>
            </div>
          </form>

          {/* <div className="flex-container">
            <Button value="Wet" onSubmit={this.onSubmit} />
            <Button value="Poopy" onSubmit={this.onSubmit} />
            <Button value="Both" onSubmit={this.onSubmit} />
          </div> */}

          <div className='flex-container-row'>
            <Link to='/changediaperlog' className='button-nav'>Logs</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>

        </div>
        
      </div>
      
    );
  }
}

export default ChangeDiaper;