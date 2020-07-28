import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import FeedBaby from './FeedBaby';
import ChangeDiaper from './ChangeDiaper';
import BathTime from './BathTime';

import './App.css';


function App() {
  return (
    <Router>
      <div className="flex-container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/feedbaby' component={FeedBaby} />          
          <Route path='/changediaper' component={ChangeDiaper} />          
          <Route path='/bathtime' component={BathTime} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;