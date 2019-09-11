import React from "react";
import axios from 'axios';
import "./companyUpdeteForm.css";
import connect from "react-redux/es/connect/connect";
import store from "../../index";

class CompanyUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
        this.onChangeAdressCompany = this.onChangeAdressCompany.bind(this);
        this.onChangeServiceCompany = this.onChangeServiceCompany.bind(this);
        this.onChangeEmployersCompany = this.onChangeEmployersCompany.bind(this);
        this.onChangeDescriptionCompany = this.onChangeDescriptionCompany.bind(this);
        this.onChangeTypeCompany = this.onChangeTypeCompany.bind(this);


        this.state = {
            nameCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.name : null,
            adressCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.adress : null,
            serviceCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.service : null,
            employersCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.employers : null,
            descriptionCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.description : null,
            typeCompany: this.props.currentViewCompanyId ? this.props.currentViewCompanyId.typeCompany : null
        }
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

    onChangeTypeCompany(e) {
        this.setState({
            typeCompany: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const updateCompany = {
            id: this.props.currentViewCompanyId ? this.props.currentViewCompanyId._id : null,
            nameCompany: this.state.nameCompany,
            adressCompany: this.state.adressCompany,
            serviceCompany: this.state.serviceCompany,
            employersCompany: this.state.employersCompany,
            descriptionCompany: this.state.descriptionCompany,
            typeCompany: this.state.typeCompany,
        };

        axios.patch('http://localhost:4000/companies/update', updateCompany)
            .then(res => {
                store.dispatch({
                    type: 'CURRENT_COMPANY_VIEW',
                    currentViewCompanyId: res.data ? res.data.company.find(x => x._id === updateCompany.id) : false
                });
                store.dispatch({
                    type: 'CURRENT_USER_SUCCESS',
                    currentUser: res.data
                });

                setTimeout(() => {
                    this.props.history.push('/home/companies/profile')
                }, 1000);

            });
    };

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
                                        <span>Name company:</span><br/>
                                        <input type="text"
                                               value={this.state.nameCompany}
                                               onChange={this.onChangeNameCompany}>
                                        </input><br/>
                                        <span>Adress:</span><br/>
                                        <input type="text"
                                               value={this.state.adressCompany}
                                               onChange={this.onChangeAdressCompany}>
                                        </input><br/>
                                        <span>Service of activity:</span><br/>
                                        <input type="text"
                                               value={this.state.serviceCompany}
                                               onChange={this.onChangeServiceCompany}>
                                        </input><br/>
                                        <span>Number of employers:</span><br/>
                                        <input type="text"
                                               value={this.state.employersCompany}
                                               onChange={this.onChangeEmployersCompany}>
                                        </input><br/>
                                        <span>Description:</span><br/>
                                        <input type="text"
                                               value={this.state.descriptionCompany}
                                               onChange={this.onChangeDescriptionCompany}>
                                        </input><br/>
                                        <span>Type:</span><br/>
                                        <input type="text"
                                               value={this.state.typeCompany}
                                               onChange={this.onChangeTypeCompany}>
                                        </input>
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
        currentUser: store.currentUserState.currentUser,
        currentViewCompanyId: store.currentViewCompanyIdState.currentViewCompanyId
    };
};

export default connect(mapStateToProps)(CompanyUpdateForm)