import React from "react";
import "./profileCompany.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class ProfileCompany extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        // let curUser = (this.props.currentUser) ? this.props.currentUser : false
        // let currentCompany = this.props.currentUser.company.filter(x=>x._id === this.props.currentViewCompanyId);
        // 5d7624cdd227991c88ca12d3
        // console.log(currentCompany)
        // console.log(curUser)
        console.log(this.props.currentViewCompanyId)
        return (
            <div className="profile-company">
                <h2>Company profile</h2>
                <div>
                    <span>Name company:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.name : null}</span>
                </div>
                <div className="profile-company-item">
                    <span>Adress:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.adress : null}</span>
                </div>
                <div className="profile-company-item">
                    <span>Service of activity:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.service : null}</span>
                </div>
                <div className="profile-company-item">
                    <span>Number of employers:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.employers : null}</span>
                </div>
                <div className="profile-company-item">
                    <span>Description:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.description : null}</span>
                </div>
                <div className="profile-company-item">
                    <span>Type:</span>
                    <span>{this.props.currentViewCompanyId ? this.props.currentViewCompanyId.typeCompany : null}</span>
                </div>

                <div className="profile-company-btn">
                    <Link to="/home/companies/update">Update profile</Link>
                    <Link to="/home/companies/delete">Delete profile</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        currentUser: store.currentUserState.currentUser,
        currentViewCompanyId: store.currentViewCompanyIdState.currentViewCompanyId
    };
};

export default connect(mapStateToProps)(ProfileCompany)