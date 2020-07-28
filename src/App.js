import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './App.css';
import { render } from '@testing-library/react';


function App() {
  return (
    <BrowserRouter>

      <main className='App'>
      <HomePage />
      </main>
    
    </BrowserRouter>
  );
}

export default App;