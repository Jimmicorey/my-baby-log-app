import React from 'react';
import { Link } from 'react-router-dom';
import './FeedBaby.css';



function FeedBaby() {
  return (


  <div>

    <h1>What's for dinner?</h1>

    <div class='flex-container'>

      <div class='flex-container-row'>
        <button class='button'>Formula</button>
        <button class='button'>Milk (Bottle)</button>
      </div>

      <div class='flex-container-row'>
        <button class='button'>Milk (Left)</button>
        <button class='button'>Milk (Right)</button>
      </div>

      <div class='flex-container-row'>
        <Link to='/feedbabylog' className='button-nav'>Logs</Link>
        <Link to='/' className='button-nav'>Back</Link>
      </div>

    </div>
    
  </div>
    

  );
}

export default FeedBaby;