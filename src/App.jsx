import React from 'react';
import Appbar from './Appbar';
import './App.css';
import IconMenu from './IconMenu';
import Courses from './Courses';
import Home from './Home';
function App() {
  return (
    <div>
      <Appbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '20%' }}>
          <IconMenu />
        </div>
        <div style={{ flex: '80%' }}>
          {/* <Courses /> */}
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;

