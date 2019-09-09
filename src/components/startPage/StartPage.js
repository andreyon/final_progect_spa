import React from "react";
import "./startPage.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="start-page">
                Welcome,{" "}
                {(this.props.currentUser) ? this.props.currentUser.signupFirstName + " make your choice in the menu" : "stranger, you must register or login"}
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
)(StartPage)