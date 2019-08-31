import React from "react";
import "./signin.css";
// import Button from "./button";

class Signin extends React.Component {
    render() {
        return (
            <div id="range2">

                <div className="outer">
                    <div className="middle">
                        <div className="inner">

                            <div className="login-wr">
                                <h2>Sign in</h2>

                                <div className="form">
                                    <input type="text" placeholder="Email"></input>
                                    <input type="password" placeholder="Password"></input>
                                            <a href="http://localhost:3000/signup"><p> У вас нет аккаунта? Регистрация </p></a>
                                            <button> Авторизация</button>
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