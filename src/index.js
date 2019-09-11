import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Функция-редьюсер для current user
const currentUserReducer = function(state = [], action) {
    switch(action.type) {
        case 'CURRENT_USER_SUCCESS':
            return Object.assign([], state, { currentUser: action.currentUser });
    }
    return state;
}

// Функция-редьюсер для current View Company
const currentViewCompanyIdReducer = function(state = {}, action) {
    switch(action.type) {
        case 'CURRENT_COMPANY_VIEW':
            return Object.assign({}, state, { currentViewCompanyId: action.currentViewCompanyId });
    }
    return state;
}

// Функция-редьюсер для списка пользователей
const userReducer = function(state = [], action) {
    switch(action.type) {
        case 'USER_LIST_SUCCESS':
            return Object.assign([], state, { users: action.users });
    }
    return state;
}

// Функция-редьюсер для списка компаний
function companyReducer(state = [], action) {
    if (action.type === 'ADD_COMPANIES') {
        return [
            ...state, action.company
        ]
    }
    return state;
}

// Combine Reducers
const reducers = combineReducers({
    userState: userReducer,
    currentUserState: currentUserReducer,
    currentViewCompanyIdState: currentViewCompanyIdReducer
});

// Создание хранилища с передачей редьюсера
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();

export default store;