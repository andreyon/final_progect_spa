import React from "react";
import "./header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
        // this.props.history.push('/home') // сделать переброску на страницу входа
    };

    render() {
        return (
            <div className="header">
                <span>You are logged in as: {this.state.user}</span>
                <button onClick={this.logout}>Log out</button>
            </div>
        );
    }
}

export default Header;