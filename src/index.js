import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css'
import App from './App';
import store from './ducks/store'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'//redux

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));

