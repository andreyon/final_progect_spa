import React from "react";
import "./userlist.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';

class Userlist extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="home">
                <h2>User list:</h2>
                {(this.props.users) ? this.props.users.map(home => <div key = {home._id}>{home.signupFirstName}</div>) : false}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.userState.users
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
)(Userlist)

// export default Userlist;