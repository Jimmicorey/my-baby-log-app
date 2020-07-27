import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css";
import FeedBaby from './FeedBaby';
import ChangeDiaper from './ChangeDiaper';
import BathTime from './BathTime';


//timer should be a functional component
class Header extends React.Component {
  render() {
    return (
      <div class="flex-container">
        <h1>Last Time Baby Was Fed</h1>
        <p className='timer'>00:00:00</p>
      </div>
    )
  }
}

//each "button" should be a separate component...
//maybe better to be separate ROUTES/LINKS to open different pages
class NavButtons extends React.Component {
  render() {
    return (
      <div class="flex-container">
        {/* <a href="feed-baby.html" class="button">Feed Baby</a> */}
        <Route path='/feedbaby' component={FeedBaby} className='button'>Feed Baby</Route>

        {/* <a href="change-diaper.html" class="button">Change Diaper</a> */}
        <Route path='/changediaper' component={ChangeDiaper} className='button'>Change Diaper</Route>
        
        {/* <a href="bath-time.html" class="button">Bath Time</a> */}
        <Route path='/bathtime' component={BathTime} className='button'>Bath Time</Route>
      </div>
    )
  }
}





///////////////////////////////////////////////////////////////
// RENDERS APP TO VIEWPORT
function App() {
  return (
    <main className='App'>

      <Header />
      <NavButtons />
    
    </main>
  );
}

export default App;