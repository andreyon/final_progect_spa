import React from "react";
import "./home.css";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import store from '../../index';
import Userlist from "../userList/Userlist";

// import Button from "./button";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [1, 2, 3],
            activeUser: ""
        }
    }

    /*

        componentDidMount() {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.get('http://localhost:4000/users')
            // axios.get('https://jsonplaceholder.typicode.com/todos')

                .then(res => {
                    this.setState({users: res.data});
                    // + dispatch !!!
                    console.log(this.state.users);
                })
                .catch((error) => {
                    console.log(error)
                    // if(error.response.status === 401) {
                    //     this.props.history.push("/login");
                    // }
                });
        }
    */

    // with Redux
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:4000/users')
        // axios.get('https://jsonplaceholder.typicode.com/todos')

            .then(res => {
                this.setState({users: res.data});
                store.dispatch({
                    type: 'USER_LIST_SUCCESS',
                    users: res.data
                });
                // this.setState({users: res.data}); // по старому
                // console.log('state', this.state.users);
                // console.log('state', this.state.users[0]);
                // console.log('props', this.props.users);
                // console.log('props', this.props.users[0]);
            })
            .catch((error) => {
                console.log(error)
                // if(error.response.status === 401) {
                //     this.props.history.push("/login");
                // }
            });
    }


    render() {
        console.log('render state', this.state.users);
        console.log('render state', this.state.users[0]);
        console.log('render props', this.props.users);
        // console.log('render props', this.props.users[0]);


        return (
            <div id="home">
                <h1>Начало работы</h1>
                <button>Список пользователей</button>
                {this.state.users.map(home => <div>{home.signupFirstName}</div>)}

                <h2>Store:</h2>
                {(this.props.users) ? this.props.users.map(home => <div key = {home._id}>{home.signupFirstName}</div>):false}

                {/*{this.props.users.map(home => <div>{home.signupFirstName}</div>)}*/}

                <ul>

                    {/*{ this.props.users.map((name, index) =><li key = {index}>{name}</li>)}*/}
                </ul>
                {/*<p>{this.props.testStore}</p>*/}
                <Userlist/>
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
)(Home)

// export default Home;