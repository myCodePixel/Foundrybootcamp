import React, { Component } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

class HeaderPage extends Component {
    render() {
        return (
            <header className="App-header">
          <img src={logo}  className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </header>
            
        );
    }
}

export default HeaderPage;