import React from "react";
import "./profile.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="profile">
                <h2>Your profile</h2>
                <div className="profile-item">
                    <span className="profile-title">First name:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupFirstName : false}</span>

                </div>
                <div className="profile-item">
                    <span>LastName:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupLastName : false}</span>

                </div>
                <div className="profile-item">
                    <span>PhoneNumber:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupPhoneNumber : false}</span>
                </div>
                <div className="profile-item">
                    <span>Nick name:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupNickName : false}</span>
                </div>
                <div className="profile-item">
                    <span>Description:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupDescription : false}</span>
                </div>
                <div className="profile-item">
                    <span>Position:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.signupPosition : false}</span>
                </div>
                <div className="profile-item">
                    <span>Email:</span>
                    <span>{(this.props.currentUser) ? this.props.currentUser.userName : false}</span>
                </div>
                <div className="profile-btn">
                    <Link to="/home/profile/update">Update profile</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
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
)(Profile)


// export default Userlist;