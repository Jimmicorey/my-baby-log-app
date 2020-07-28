import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import FeedBaby from './FeedBaby';
import ChangeDiaper from './ChangeDiaper';
import BathTime from './BathTime';
import FeedBabyLog from './FeedBabyLog';
import ChangeDiaperLog from './ChangeDiaperLog';
import BathTimeLog from './BathTimeLog';

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
          <Route path='/feedbabylog' component={FeedBabyLog} />
          <Route path='/changediaperlog' component={ChangeDiaperLog} />
          <Route path='/bathtimelog' component={BathTimeLog} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;