import {createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import userReducer from './user'

const history = createHistory()

let middleware = [
    promiseMiddleware(),
    routerMiddleware(history),
    thunk
]

export default createStore(
    userReducer,
    applyMiddleware(...middleware)
)