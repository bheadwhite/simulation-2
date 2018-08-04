import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userReducer from './redux/user'
import {createStore} from 'redux'//redux
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'//redux

const store = createStore(userReducer)//redux

ReactDOM.render(
    // redux
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    {/* redux */}
</Provider>, document.getElementById('root'));

