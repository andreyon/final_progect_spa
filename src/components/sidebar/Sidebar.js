import React from "react";
import "./sidebar.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-link">
                    <Link to ="/home/userlist">Users list</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/companies">Your companies list</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/companies/update">Add your company</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/companies/add">Update your company</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/profile">Your profile</Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;