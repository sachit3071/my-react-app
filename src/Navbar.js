import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import React, { useState } from 'react'

function Navbar(props) {
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const handleBtnText = (event)=>
  {

    props.toggleMode(event);
    if(event.target.checked === true)
    {
      setBtnText('Enable Light Mode');
    }
    else 
    {
      setBtnText('Enable Dark mode');
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode ==='light'?'light': 'dark'} bg-${props.mode ==='light'?'light': 'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:`${props.color}`}} href="/">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/a">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown-hvr">
              <a className={`nav-link dropdown-toggle bg-${props.mode ==='light'?'light': 'dark'}`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Colors
              </a>
              <ul className="dropdown-menu row" aria-labelledby="navbarDropdown">
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#00a300'}}></span></label>    
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#0050ef'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#6a00ff'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#aa00ff'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#d80073'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#a20025'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#e51400'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#fa6800'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#f0a30a'}}></span></label>                
                <label className="lbl d-inline-block"><input type="radio" name='color' className="p-2 d-inline"/><span className="checkmark p-1" onClick={props.toggleColor} style={{backgroundColor:'#e3c800'}}></span></label>              
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className={`form-check form-switch bg-${props.mode ==='light'?'light': 'dark'}`}>
              <input className="form-check-input" onClick={handleBtnText} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className ="form-check-label" style={props.mode ==='light'?{color:'black'}: {color:'white'}} htmlFor="flexSwitchCheckDefault">{btnText}</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  name: PropTypes.string,
}
