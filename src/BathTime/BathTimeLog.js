import React from 'react';
import { Link } from 'react-router-dom';
import './BathTimeLog.css';

/**
 * This component needs to utilize DATABASE to populate stored LOGS
 * 
 */


function BathTimeLog() {
  return (

    <div>
        <h1>BATH TIME LOG</h1>
  
      <div className='flex-container'>
      <ul>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
        <li>DATA LOG</li>
      </ul>

        <div className='flex-container-row'>
          <Link to='/bathtime' className='button-nav'>Back</Link>
          <Link to='/' className='button-nav'>Home</Link>
        </div>
      </div>
    </div>
  
    );
}

export default BathTimeLog;