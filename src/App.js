
import React from 'react';
import 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav/index";
import HomePage from '../src/components/HomePage/index';
import Footer from '../src/components/Footer/index';
import BandPage from './components/BandPage/BandPage';
import SignInScreen from '../src/components/SignInScreen';
import './App.css';
import './index.css';

function App() {
    return (
        <Router>
            <div>
                <Nav/>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SignInScreen} />
                <Route exact path="/band/:id" component={BandPage} />
                <Footer/>
            </div>
        </Router>
    );
}

export default App