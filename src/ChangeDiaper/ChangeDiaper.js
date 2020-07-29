import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';

/** ChangeDiaper should POST a NEW DATA LOG to API Database **/
/** ChangeDiaper is a FORM TYPE=RADIO */
class ChangeDiaper extends React.Component {

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('WHICH BUTTON IS IT ???? submit button works!!!');
  }

  ///////////////////////////////////////////////////// THIS NEEDS SEPARATE DATA VALUE SUBMIT FOR EACH BUTTON

  render() {
    return (
      
      <div>

        <h1>How was my diaper?</h1>

        <div className='flex-container'>

          <form className='change-diaper-form' onSubmit={this.handleSubmit}>
            <div className="flex-container">
              <button className="button">Wet</button>
              <button className="button">Poopy</button>
              <button className="button">Both</button>
            </div>
          </form>

          <div className='flex-container-row'>
            <Link to='/changediaperlog' className='button-nav'>Log</Link>
            <Link to='/' className='button-nav'>Back</Link>
          </div>

        </div>
        
      </div>
      
    );
  }
}

export default ChangeDiaper;