import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import store from "../../index";

// import "./profileUpdateForm.css;

class ProfileUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupPhoneNumber = this.onChangeSignupPhoneNumber.bind(this);
        this.onChangeSignupNickName = this.onChangeSignupNickName.bind(this);
        this.onChangeSignupDescription = this.onChangeSignupDescription.bind(this);
        this.onChangeSignupPosition = this.onChangeSignupPosition.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);

        this.state = {
            signupFirstName: this.props.currentUser ? this.props.currentUser.signupFirstName : "",
            signupLastName: this.props.currentUser ? this.props.currentUser.signupLastName : '',
            signupPhoneNumber: this.props.currentUser ? this.props.currentUser.signupPhoneNumber : '',
            signupNickName: this.props.currentUser ? this.props.currentUser.signupNickName : '',
            signupDescription: this.props.currentUser ? this.props.currentUser.signupDescription : '',
            signupPosition: this.props.currentUser ? this.props.currentUser.signupPosition : '',
            userName: this.props.currentUser ? this.props.currentUser.userName : ''
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

    onSubmit = (e) => {
        e.preventDefault();

        const updateUser = {
            id: this.props.currentUser ? this.props.currentUser._id : false,
            signupFirstName: this.state.signupFirstName,
            signupLastName: this.state.signupLastName,
            signupPhoneNumber: this.state.signupPhoneNumber,
            signupNickName: this.state.signupNickName,
            signupDescription: this.state.signupDescription,
            signupPosition: this.state.signupPosition,
            userName: this.state.userName,
        };

        axios.patch('http://localhost:4000/users/update', updateUser)
            .then(res => {
                store.dispatch({
                    type: 'CURRENT_USER_SUCCESS',
                    currentUser: res.data.user
                })
                    setTimeout(()=>{
                this.props.history.push('/home/profile')}, 1000);
                console.log(res.data)
            });


        /*this.setState({
            signupFirstName: '',
            signupLastName: '',
            signupPhoneNumber: '',
            signupNickName: '',
            signupDescription: '',
            signupPosition: '',
            userName: ''
        })*/
    }

    // отобразить сообщение о неправильной валидации от сервера
    // res.json({success: false, msg: 'Please pass all fields.'});
    // и другие сообщения тоже,

    render() {
        return (
            <div className="profile-update-form range2">

                <div className="outer">
                    <div className="middle">
                        <div className="inner">

                            <div className="login-wr">
                                <h2>Update profile</h2>

                                <div className="form">
                                    <form onSubmit={this.onSubmit}>
                                        <span>First name:</span>
                                        <input type="text"
                                               // placeholder={this.state.signupFirstName}
                                               value={this.state.signupFirstName}
                                               onChange={this.onChangeSignupFirstName}>
                                        </input><br/>
                                        <span>Last name:</span>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.signupLastName : false}
                                               value={this.state.signupLastName}
                                               onChange={this.onChangeSignupLastName}>
                                        </input><br/>
                                        <span>PhoneNumber:</span>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.signupPhoneNumber : false}
                                               value={this.state.signupPhoneNumber}
                                               onChange={this.onChangeSignupPhoneNumber}>
                                        </input><br/>
                                        <span>Nick name:</span>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.signupNickName : false}
                                               value={this.state.signupNickName}
                                               onChange={this.onChangeSignupNickName}>
                                        </input><br/>
                                        <span>Description:</span>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.signupDescription : false}
                                               value={this.state.signupDescription}
                                               onChange={this.onChangeSignupDescription}>
                                        </input><br/>
                                        <span>Position:</span>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.signupPosition : false}
                                               value={this.state.signupPosition}
                                               onChange={this.onChangeSignupPosition}>
                                        </input>
                                        <br/>
                                        <span>Email:</span><br/>
                                        <input type="text"
                                               // placeholder={this.props.currentUser ? this.props.currentUser.userName : false}
                                               value={this.state.userName}
                                               onChange={this.onChangeUserName}>
                                        </input>
                                        {/*<p>*/}
                                        {/*<Link to="/">У вас уже есть аккаунт? Войти</Link>*/}
                                        {/*</p>*/}
                                        {/*<a href="http://localhost:3000"><p> У вас уже есть аккаунт? Войти </p></a>*/}
                                        <input type="submit" value="Update"></input>
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


const mapStateToProps = (store) => {
    return {
        currentUser: store.currentUserState.currentUser
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        // addToStore: ()
    })
)(ProfileUpdateForm)


// export default ProfileUpdateForm;