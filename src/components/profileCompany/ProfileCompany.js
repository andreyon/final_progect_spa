import React from "react";
import "./profileCompany.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class ProfileCompany extends React.Component {
    constructor(props) {
        super(props);
        this.hendleDelete = this.hendleDelete.bind(this);
    }

    hendleDelete = (e) => {
        axios.delete('http://localhost:4000/companies/delete', {
            params: {
                id: this.props.currentViewCompanyId ? this.props.currentViewCompanyId._id : null,
                userId: this.props.currentUser ? this.props.currentUser._id : false
            }
        })
            .then(res => {
                store.dispatch({
                    type: 'CURRENT_USER_SUCCESS',
                    currentUser: res.data
                });
            });
        setTimeout(() => {
            this.props.history.push('/home/companies')
        }, 1000);
    };

    render() {
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
                    <button onClick={this.hendleDelete}>Delete</button>
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