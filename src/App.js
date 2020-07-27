import React from 'react';
import "./App.css";



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
        <a href="feed-baby.html" class="button">Feed Baby</a>
        <a href="change-diaper.html" class="button">Change Diaper</a>
        <a href="bath-time.html" class="button">Bath Time</a>
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