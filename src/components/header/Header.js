import React from "react";
import "./header.css";
import connect from "react-redux/es/connect/connect";
import { withRouter} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/');
        // window.location.reload();

        // this.props.history.push('/home') // сделать переброску на страницу входа
    };

    render() {
        return (
            <div className="header">
                <span>{"You are logged in as: "}{" "}
                    {(this.props.currentUser)?this.props.currentUser.signupFirstName:"you are not logged in"}{" "}
                    {(this.props.currentUser)?this.props.currentUser.signupLastName:false}
                    </span>
                <button onClick={this.logout.bind(this)}>Log out</button>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        currentUser: store.currentUserState.currentUser
    };
};

export default withRouter(connect(
    mapStateToProps,
    dispatch => ({
        // addToStore: ()
    })
)(Header))

// export default Header;