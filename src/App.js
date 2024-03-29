import React from 'react';
import {
    BrowserRouter as Router, Route, withRouter,
    Link
} from "react-router-dom";
import './App.css';
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
import Home from './components/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import CompaniesList from "./components/companiesList/CompaniesList";
import CompanyUpdateForm from "./components/companyUpdeteForm/CompanyUpdeteForm";
import Profile from "./components/profile/Profile";
import ProfileUpdateForm from "./components/profileUpdateForm/ProfileUpdateForm";
import StartPage from "./components/startPage/StartPage";
import ProfileCompany from "./components/profileCompany/ProfileCompany";
import CompanyAddForm from "./components/companyAddForm/CompanyAddForm";


function App() {
    return (
        <Router>
            <Route path="/" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>

            <Route path="/home">
                <Route component={Home}/>
                <div className="home-flex-wrapper">
                    <Route component={Sidebar}/>

                    <Route path="/home" exact component={StartPage}/>
                    <Route path="/home/companies" exact component={CompaniesList}/>
                    <Route path="/home/companies/add" component={CompanyAddForm}/>
                    <Route path="/home/companies/update" component={CompanyUpdateForm}/>
                    <Route path="/home/companies/profile" component={ProfileCompany}/>
                    <Route path="/home/profile" exact component={Profile}/>
                    <Route path="/home/profile/update" component={ProfileUpdateForm}/>

                </div>
            </Route>
        </Router>
    );
}

export default App;
