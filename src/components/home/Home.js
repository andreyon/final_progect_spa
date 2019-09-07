import React from "react";
import "./home.css";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Button from "./button";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [1, 2, 3]
    }}

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('http://localhost:4000/users')
        // axios.get('https://jsonplaceholder.typicode.com/todos')

            .then(res => {
                this.setState({ users: res.data });
                console.log(this.state.users);
            })
            .catch((error) => {
                console.log(error)
                // if(error.response.status === 401) {
                //     this.props.history.push("/login");
                // }
            });
    }

    render() {
        return (
            <div id="home">
<h1>Начало работы</h1>

                {this.state.users.map(home => <div>{home.signupFirstName}</div>)}



            </div>
        );
    }
}

export default Home;