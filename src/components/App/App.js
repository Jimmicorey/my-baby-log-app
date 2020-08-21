import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import FeedBaby from '../FeedBaby/FeedBaby';
import ChangeDiaper from '../ChangeDiaper/ChangeDiaper';
import BathTime from '../BathTime/BathTime';
import FeedBabyLog from '../FeedBaby/FeedBabyLog';
import ChangeDiaperLog from '../ChangeDiaper/ChangeDiaperLog';
import BathTimeLog from '../BathTime/BathTimeLog';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="flex-container">
          <Switch>
            <Route exact path='/' component={AboutPage} />

            <Route path='/homepage' component={HomePage} />

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
}

export default App;