import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'

function App() {
    return (
        <Router>
            <Route path="/" exact component={Signin}/>
            <Route path="/signup" component={Signup}/>
        </Router>
    );
}

export default App;
