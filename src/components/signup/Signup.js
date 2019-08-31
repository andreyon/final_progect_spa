import React from "react";
import axios from 'axios';
import "./signup.css";

// import Button from "./button";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupPhoneNumber = this.onChangeSignupPhoneNumber.bind(this);
        this.onChangeSignupNickName = this.onChangeSignupNickName.bind(this);
        this.onChangeSignupDescription = this.onChangeSignupDescription.bind(this);
        this.onChangeSignupPosition = this.onChangeSignupPosition.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);

        this.state = {
            signupFirstName: '',
            signupLastName: '',
            signupPhoneNumber: '',
            signupNickName: '',
            signupDescription: '',
            signupPosition: '',
            signupEmail: '',
            signupPassword: ''
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

    onChangeSignupEmail(e) {
        this.setState({
            signupEmail: e.target.value
        });
    }

    onChangeSignupPassword(e) {
        this.setState({
            signupPassword: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log("FirstName:" + this.state.signupFirstName);
        console.log(`LastName: ${this.state.signupLastName}`);
        console.log(`PhoneNumber: ${this.state.signupPhoneNumber}`);
        console.log(`NickName: ${this.state.signupNickName}`);
        console.log(`Description: ${this.state.signupDescription}`);
        console.log(`Position: ${this.state.signupPosition}`);
        console.log(`Email: ${this.state.signupEmail}`);
        console.log(`Password: ${this.state.signupPassword}`);

        const newUser = {
            signupFirstName: this.state.signupFirstName,
            signupLastName: this.state.signupLastName,
            signupPhoneNumber: this.state.signupPhoneNumber,
            signupNickName: this.state.signupNickName,
            signupDescription: this.state.signupDescription,
            signupPosition: this.state.signupPosition,
            signupEmail: this.state.signupEmail,
            signupPassword: this.state.signupPassword
        }

        axios.post('http://localhost:4000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            signupFirstName: '',
            signupLastName: '',
            signupPhoneNumber: '',
            signupNickName: '',
            signupDescription: '',
            signupPosition: '',
            signupEmail: '',
            signupPassword: ''
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
                                        <input type="text"
                                               placeholder="Email"
                                               value={this.state.signupEmail}
                                               onChange={this.onChangeSignupEmail}>
                                        </input>
                                        <input type="password"
                                               placeholder="Password"
                                               value={this.state.signupPassword}
                                               onChange={this.onChangeSignupPassword}>
                                        </input>
                                        <a href="http://localhost:3000"><p> У вас уже есть аккаунт? Войти </p></a>
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

export default Signup;