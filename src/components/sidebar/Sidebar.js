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
                <div>
                    <Link to ="/home/userlist">Список пользователей</Link>
                </div>
                <div>
                    <Link to="/home/companies">Список компаний</Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;