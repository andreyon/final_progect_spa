import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import "./signup.css";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupPhoneNumber = this.onChangeSignupPhoneNumber.bind(this);
        this.onChangeSignupNickName = this.onChangeSignupNickName.bind(this);
        this.onChangeSignupDescription = this.onChangeSignupDescription.bind(this);
        this.onChangeSignupPosition = this.onChangeSignupPosition.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            signupFirstName: '',
            signupLastName: '',
            signupPhoneNumber: '',
            signupNickName: '',
            signupDescription: '',
            signupPosition: '',
            userName: '',
            password: ''
        }
    }

    onChangeSignupFirstName(e) {
        this.setState({
            signupFirstName: e.target.value
        });
    }

    onChangeSignupLastName(e) {
        this.setState({
            signupLastName: e.target.value
        });
    }

    onChangeSignupPhoneNumber(e) {
        this.setState({
            signupPhoneNumber: e.target.value
        });
    }

    onChangeSignupNickName(e) {
        this.setState({
            signupNickName: e.target.value
        });
    }

    onChangeSignupDescription(e) {
        this.setState({
            signupDescription: e.target.value
        });
    }

    onChangeSignupPosition(e) {
        this.setState({
            signupPosition: e.target.value
        });
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

        const newUser = {
            signupFirstName: this.state.signupFirstName,
            signupLastName: this.state.signupLastName,
            signupPhoneNumber: this.state.signupPhoneNumber,
            signupNickName: this.state.signupNickName,
            signupDescription: this.state.signupDescription,
            signupPosition: this.state.signupPosition,
            userName: this.state.userName,
            password: this.state.password
        }

        axios.post('http://localhost:4000/users/add', newUser)
            .then(res => {
                console.log(res.data);
                this.props.history.push("/")
            });

        this.setState({
            signupFirstName: '',
            signupLastName: '',
            signupPhoneNumber: '',
            signupNickName: '',
            signupDescription: '',
            signupPosition: '',
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
                                <h2>Sign up</h2>
                                <div className="form">
                                    <form onSubmit={this.onSubmit}>
                                        <input type="text"
                                               placeholder="First name"
                                               value={this.state.signupFirstName}
                                               onChange={this.onChangeSignupFirstName}>
                                        </input>
                                        <input type="text"
                                               placeholder="Last name"
                                               value={this.state.signupLastName}
                                               onChange={this.onChangeSignupLastName}>
                                        </input>
                                        <input type="text"
                                               placeholder="Phone number"
                                               value={this.state.signupPhoneNumber}
                                               onChange={this.onChangeSignupPhoneNumber}>
                                        </input>
                                        <input type="text"
                                               placeholder="Nick Name"
                                               value={this.state.signupNickName}
                                               onChange={this.onChangeSignupNickName}>
                                        </input>
                                        <input type="text"
                                               placeholder="Description"
                                               value={this.state.signupDescription}
                                               onChange={this.onChangeSignupDescription}>
                                        </input>
                                        <input type="text"
                                               placeholder="Position"
                                               value={this.state.signupPosition}
                                               onChange={this.onChangeSignupPosition}>
                                        </input>
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
                                            <Link to="/">Have an account? Log in</Link>
                                        </p>
                                        {/*<a href="http://localhost:3000"><p> У вас уже есть аккаунт? Войти </p></a>*/}
                                        <input type="submit" value="Create account"></input>
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

export default Signup;