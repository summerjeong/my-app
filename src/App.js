import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="header">
        <headerSection />
        <h3> Discover Others on Campus!</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Navbar () {
  return (
    <nav className = "nav"> 
        <div className = "navbar-container"> 
        <ul> 
        <li>  <button class="tab_button"> intNUe </button> </li>
          <li> <button class="tab_button"> genres</button> </li>
          <li> <button class="tab_button"> tracks </button> </li>
          <li> <button class="tab_button"> explore</button> </li>
          <li> <button class="tab_button"> friends </button> </li>            
          <li> <button class="tab_button"> 
            <div class="profile-icon"> </div>                 
            <div> profile</div> 
        </button> </li>
        </ul>
        <div class="line"> </div>          
        </div>
    </nav>
  )
}

function headerSection() {
  return (
    <div className = "rectangle-container"> 
    </div>
  )
}


export default App;
