import React from "react";
import {Link} from "react-router-dom";
import "./signin.css";
import axios from "axios";
import store from "../../index";

// import Button from "./button";

class Signin extends React.Component {
    constructor(props) {
        // переименовать свойства в signin ?
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            userName: '',
            password: '',
            message: '',
        }
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(`UserName: ${this.state.userName}`);
        console.log(`Password: ${this.state.password}`);

        const User = {
            userName: this.state.userName,
            password: this.state.password
        }

        axios.post('http://localhost:4000/login', User)
            .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                this.setState({message: ''});
                store.dispatch({
                    type: 'CURRENT_USER_SUCCESS',
                    currentUser: result.data.user
                });
                this.props.history.push('/home');
                console.log(result.data.currentUserId);// текущий пользователь
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({message: 'Login failed. Username or password not match'});
                }
            });

        console.log(localStorage);

        this.setState({
            userName: '',
            password: ''
        })
    }

    render() {
        return (
            <div id="range2">

                <div className="outer">
                    <div className="middle">
                        <div className="inner">

                            <div className="login-wr">
                                <h2>Sign in</h2>

                                <div className="form">
                                    <form onSubmit={this.onSubmit}>

                                        {this.state.message !== '' &&
                                        <div className="login-massage">
                                            {this.state.message}
                                        </div>
                                        }

                                        <input type="email"
                                               placeholder="Email"
                                               value={this.state.userName}
                                               onChange={this.onChangeUserName}>
                                        </input>
                                        <input type="password"
                                               placeholder="Password"
                                               value={this.state.password}
                                               onChange={this.onChangePassword}>
                                        </input>
                                        <p>
                                            <Link to="/signup">No account? Sign up</Link>
                                        </p>
                                        <input type="submit" value="Sign in"></input>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Signin;