import React from "react";
import "./companiesList.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class CompaniesList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="company-list">
                <h2>Your companies list</h2>
                <p>please, click on an item to view details</p>
                <ul>
                    <li className="header-company-list">
                        <span>Name company</span>
                        <span>Service</span>
                        <span>Number of employers</span>
                    </li>
                    <div className="list-wrapper">
                    {(this.props.currentUser) ? this.props.currentUser.company.map(item => <li key = {item._id}><span>{item.name}</span><span>{item.service}</span><span>{item.employers}</span></li>) : false}
                    </div>
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        // users: store.userState.users
        currentUser: store.currentUserState.currentUser
    };
}

export default connect(
    mapStateToProps,
    // state => ({
    //     testStore: state
    // })

    dispatch => ({
        // addToStore: ()
    })
)(CompaniesList)
