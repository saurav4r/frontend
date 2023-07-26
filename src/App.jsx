import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';
import './App.css';
import IconMenu from './IconMenu';
import Courses from './Courses';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Mainpage from './Mainpage';

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          
        </Routes>
      </Router>
      

    </div>

  );
}




export default App;

