import React from 'react';
import {
    BrowserRouter as Router, Route,
    Link
} from "react-router-dom";
import './App.css';
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Userlist from "./components/userList/Userlist";
import CompaniesList from "./components/companiesList/CompaniesList";


function App() {
    return (
        <Router>
            <Route path="/" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>

            <Route path="/home">
                <Route component={Home}/>
                <div className="home-flex-wrapper">
                    <Route component={Sidebar}/>
                    <Route path="/home/userlist" component={Userlist}></Route>
                    <Route path="/home/companies" component={CompaniesList}></Route>
                </div>
            </Route>


            {/*<Route path="/home" exact component={Home}>
                // <Route path="/home/userlist" component={Userlist}></Route>
                // <Route path="/home/companies" component={Home}></Route>
            </Route>

            <Route path="/home/userlist">
                <Route exact component={Home}/>
                <Route component={Userlist}/>
            </Route>

            <Route path="/home/companies">
                <Route exact component={Home}/>
                <Route component={CompaniesList}/>
            </Route>*/}


        </Router>
    );
}

export default App;
