import React from "react";
import "./sidebar.css";
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-link">
                    <Link to="/home/companies">Your companies list</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/companies/add">Add new company</Link>
                </div>
                <div className="sidebar-link">
                    <Link to="/home/profile">Your profile</Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;