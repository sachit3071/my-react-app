import React, { useState } from 'react'
// import logo from './logo.svg';
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import TextBox from './text';

function App() {

  const [mode, setMode] = useState('light')
  const [color, setColor] = useState({ color: '#ffffff' })
  const [textColor, setTextColor] = useState(mode === 'light' ? { color: 'black', backgroundColor: 'white' } : { color: 'light', backgroundColor: 'black' })
  const handleTextColor = () => {
    if (mode === 'light') {
      setTextColor({
        color: 'white',
        backgroundColor: 'black'
      });
    }
    else {
      setTextColor({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  }
  const toggleMode = (event) => {
    if (event.target.checked === true) {
      // console.log(mode, "inside toggleMode before setMode");
      setMode('dark');
      console.log(mode, "inside toggleMode");
      document.body.style.backgroundColor = 'black';
      handleTextColor(mode);
      console.log(textColor);
    }
    else {
      // console.log(mode, "inside toggleMode before setMode");
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log(mode, "inside toggleMode");
      handleTextColor(mode);
      console.log(textColor);
    }
  }
  const toggleColor = (event) => {
    setColor(event.target.style.backgroundColor);
    console.log(event.target.style.backgroundColor);
  }
  return (
    <>
    <Router>
      <Navbar title='textUtils' mode={mode} textColor={textColor} toggleMode={toggleMode} toggleColor={toggleColor} color={color} />
      <Routes>
        <Route exact path="/a"><TextBox/></Route>
        <Route exact path="/About"><About textColor={textColor} color={color} /></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;