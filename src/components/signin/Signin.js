import React from "react";
import {Link} from "react-router-dom";
import "./signin.css";
import axios from "axios";

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
                this.props.history.push('/home')
                console.log('result.data.token');
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
                                        <div>
                                            {this.state.message}
                                        </div>
                                        }

                                        <input type="text"
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
                                            <Link to="/signup">У вас нет аккаунта? Регистрация</Link>
                                        </p>
                                        <input type="submit" value="Авторизация"></input>
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