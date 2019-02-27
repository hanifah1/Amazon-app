import React, { Component } from "react";
import logo from "../logo.png";
import '../navbarStyles.css';


class NavBar extends Component {
  render() {

    const navStyle = {
      backgroundColor: '#232f3e',
      height: 100
    }

    const buttonStyle = {
      background: 'none',
      border: '1px solid gray',
      borderRadius: 4
    }

    const hbutton = {
      width: 22,
      height: '3px',
      margin: '6px 3px',
      backgroundColor: 'white'
    }

    return (

      <nav style={navStyle} className="navbar navbar-default">
<div id="wrapper">
    <div id="navcol1">
      <button style={buttonStyle}>
        <div style={hbutton}></div>
        <div style={hbutton}></div>
        <div style={hbutton}></div>
      </button>
      <img className='img-responsive' style={{ width: 120 }} src={logo}/>
    </div>


    <div id="navcol2">
    <div id="searchBar" class="input-group mb-3">

      <div class="input-group-prepend">
        <span class="input-group-text">All &nbsp;<i class="fa fa-caret-down"></i></span>
      </div>
      <input type="text" class="form-control" style={{border: 'black'}} aria-label="Amount (to the nearest dollar)"/>
      <div class="input-group-append">
        <span style={{backgroundColor: 'sandybrown', border: 'black'}} class="input-group-text"><i class="fa fa-search"></i></span>
      </div>

    <div> ugiihoholhgih i </div>

    </div>
    <h4 className="navbarLinks">

    <span>
    <a className="navlink">Your Amazon.com</a>
    <a className="navlink">Today's Deals</a>
    <a className="navlink">Gift Cards</a>
    <a className="navlink">Whole Foods</a>
    <a className="navlink">Registry</a>
    <a className="navlink">Sell</a>
    <a className="navlink">Help</a>
    </span>
    </h4>
    </div> //ends column




      <a className="navbar-brand" href="#">
        navbar <span className="badge badge-pill badge-secondary">
        {this.props.totalCounters}</span>
      </a>

      </div>
      </nav>
    );
  }
}

export default NavBar;
