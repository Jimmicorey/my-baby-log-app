import React from 'react';
import { Link } from 'react-router-dom';
import './ChangeDiaper.css';

/** ChangeDiaper should POST a NEW DATA LOG to API Database **/
/** ChangeDiaper is a FORM TYPE=RADIO */
class Button extends React.Component {
  onClick(event) {
    const value = event.target.value;
    this.props.onSubmit(value);
  }

  render() {
    return (
      <button 
        className='button' 
        value={this.props.value} 
        onClick={e => this.onClick(e)}>
          {this.props.value}
      </button>
    );
  }
}

class ChangeDiaper extends React.Component {
  onSubmit(value) {
    // I have the button value here!
    console.log(`ChangeDiaper ${value} button works!!!!`);
  }

  render() {
    return (
      
      <div>

        <h1>How was my diaper?</h1>

        <div className='flex-container'>

          <div className="flex-container">
            <Button value="Wet" onSubmit={this.onSubmit} />
            <Button value="Poopy" onSubmit={this.onSubmit} />
            <Button value="Both" onSubmit={this.onSubmit} />
          </div>

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