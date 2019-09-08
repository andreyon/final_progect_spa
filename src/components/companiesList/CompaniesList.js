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
            <div className="companies-List">
                <h2>Companies list:</h2>
                {(this.props.companies) ? this.props.companies.map(home => <div key = {home._id}>{home.signupLastName}</div>) : false}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        companies: store.userState.users
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


// export default CompaniesList;