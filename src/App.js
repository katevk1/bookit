
import React, { Component } from 'react';
import 'react-materialize';
import Nav from "../src/components/Nav/index";
import HomePage from '../src/components/HomePage/index';
import Footer from '../src/components/Footer/index';
import './App.css';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <Nav/>
     
         <HomePage/>
          <Footer/> 
        </header>
      </div>
    );
  }
}

export default App