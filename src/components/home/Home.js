import React from "react";
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';
import Header from "../header/Header";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: "",
            activeUser: ""
        }
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:4000/users')

            .then(res => {
                this.setState({users: res.data});
                store.dispatch({
                    type: 'USER_LIST_SUCCESS',
                    users: res.data
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <div className="home-flex-wrapper">
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.userState.users
    };
};


export default connect(
    mapStateToProps,
    dispatch => ({
        // addToStore: ()
    })
)(Home)