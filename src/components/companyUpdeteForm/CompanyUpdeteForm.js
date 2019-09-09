import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import "./companyUpdeteForm.css";

class CompanyUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this); // не забыть убрать это
        this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
        this.onChangeAdressCompany = this.onChangeAdressCompany.bind(this);
        this.onChangeServiceCompany = this.onChangeServiceCompany.bind(this);
        this.onChangeEmployersCompany = this.onChangeEmployersCompany.bind(this);
        this.onChangeDescriptionCompany = this.onChangeDescriptionCompany.bind(this);


        this.state = {
            userName: '', // потом сделать автозаполнение
            nameCompany: '',
            adressCompany: '',
            serviceCompany: '',
            employersCompany: '',
            descriptionCompany: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangeNameCompany(e) {
        this.setState({
            nameCompany: e.target.value
        });
    }

    onChangeAdressCompany(e) {
        this.setState({
            adressCompany: e.target.value
        });
    }

    onChangeServiceCompany(e) {
        this.setState({
            serviceCompany: e.target.value
        });
    }

    onChangeEmployersCompany(e) {
        this.setState({
            employersCompany: e.target.value
        });
    }

    onChangeDescriptionCompany(e) {
        this.setState({
            descriptionCompany: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newCompany = {
            userName: this.state.userName,
            nameCompany: this.state.nameCompany,
            adressCompany: this.state.adressCompany,
            serviceCompany: this.state.serviceCompany,
            employersCompany: this.state.employersCompany,
            descriptionCompany: this.state.descriptionCompany,
        };

        axios.patch('http://localhost:4000/companies/update', newCompany)
            .then(res => {
                console.log(res.data)
                // this.props.history.push("/")
            }); // потом его на список перебросить

        this.setState({
            userName: '', // потом сделать автозаполнение
            nameCompany: '',
            adressCompany: '',
            serviceCompany: '',
            employersCompany: '',
            descriptionCompany: ''
        })
    }

    // отобразить сообщение о неправильной валидации от сервера
    // res.json({success: false, msg: 'Please pass all fields.'});
    // и другие сообщения тоже,

    render() {
        return (
            <div className="range2">

                <div className="outer">
                    <div className="middle">
                        <div className="inner">

                            <div className="login-wr">
                                <h2>Update company</h2>

                                <div className="form">
                                    <form onSubmit={this.onSubmit}>
                                        <input type="text"
                                               placeholder="Your email"
                                               value={this.state.userName}
                                               onChange={this.onChangeUserName}>
                                        </input>
                                        <input type="text"
                                               placeholder="Company name"
                                               value={this.state.nameCompany}
                                               onChange={this.onChangeNameCompany}>
                                        </input>
                                        <input type="text"
                                               placeholder="Adress"
                                               value={this.state.adressCompany}
                                               onChange={this.onChangeAdressCompany}>
                                        </input>
                                        <input type="text"
                                               placeholder="Service"
                                               value={this.state.serviceCompany}
                                               onChange={this.onChangeServiceCompany}>
                                        </input>
                                        <input type="text"
                                               placeholder="Employers"
                                               value={this.state.employersCompany}
                                               onChange={this.onChangeEmployersCompany}>
                                        </input>
                                        <input type="text"
                                               placeholder="Description"
                                               value={this.state.descriptionCompany}
                                               onChange={this.onChangeDescriptionCompany}>
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

export default CompanyUpdateForm;