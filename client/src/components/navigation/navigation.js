import axios from "axios";
import React, { Component } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navElements.js'

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Anonymous",
    };
  }
  render() {
    return (
      <React.Fragment>
        <> 
        <Nav>
          <Bars/>

          <NavMenu>
          <NavLink to = '/' activeStyle className= 'nav-home'>
              Tikketi
            </NavLink>
          <NavLink to = '/how' activeStyle>
              How It Works
            </NavLink>
            <NavLink to = '/signup' activeStyle>
              Signup
            </NavLink>
            <NavLink to = '/login' activeStyle>
              Login
            </NavLink>
          </NavMenu>
        </Nav>
        
        </>
        
      </React.Fragment>
    );
  }
}

export default Navigation;
  