import React from 'react';
import {
    BrowserRouter as Router, Route,
    // Link
} from "react-router-dom";
import './App.css';
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
    return (
        <Router>
            <Route path="/" exact component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/home">
                <Route component={Header}/>
                <Route component={Home}/>
            </Route>
        </Router>
    );
}

export default App;
