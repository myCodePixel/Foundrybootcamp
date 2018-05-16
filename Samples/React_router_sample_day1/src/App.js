import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import PrimaryLayout from './component/PrimaryLayout'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <PrimaryLayout />
      </BrowserRouter>
      
      
    );
  }
}

export default App;
