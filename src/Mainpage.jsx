import React from 'react';
import Appbar from './Appbar'; // Import the Appbar component here
import IconMenu from './IconMenu';
import Courses from './Courses';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function Mainpage() {
  return (
    <div>
      <Appbar /> {/* Render the Appbar component */}
      <div style={{ display: 'flex', paddingTop: '10vh' }}>
        <div style={{ flex: '20%' }}>
          <IconMenu />
        </div>
        <div style={{ flex: '80%', marginLeft: '20%' }}>
          {/* <Courses /> */}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;

