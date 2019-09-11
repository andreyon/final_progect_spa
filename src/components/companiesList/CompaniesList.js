import React from "react";
import "./companiesList.css";
import {connect} from 'react-redux'
import store from '../../index';

class CompaniesList extends React.Component {
    constructor(props) {
        super(props);
        this.heandlerClickCompanyItem = this.heandlerClickCompanyItem.bind(this)
    }

    heandlerClickCompanyItem(e) {
        store.dispatch({
            type: 'CURRENT_COMPANY_VIEW',
            currentViewCompanyId: this.props.currentUser ? this.props.currentUser.company.find(x => x._id === e.currentTarget.className) : false
        });
        setTimeout(() => {
            this.props.history.push('/home/companies/profile')
        }, 500);
    }

    render() {
        return (
            <div className="company-list">
                <h2>Your companies list</h2>
                <p>please, click on an item to view details</p>
                <ul>
                    <li className="header-company-list">
                        <span>Name company</span>
                        <span>Service</span>
                        <span>Number of employers</span>
                    </li>
                    <div className="list-wrapper">
                        {(this.props.currentUser) ? this.props.currentUser.company.map(item => <li key={item._id}
                                                                                                   className={item._id}
                                                                                                   onClick={this.heandlerClickCompanyItem}>
                            <span>{item.name}</span><span>{item.service}</span><span>{item.employers}</span>
                        </li>) : false}
                    </div>
                </ul>
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

export default connect(mapStateToProps)(CompaniesList)
