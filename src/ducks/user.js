import axios from 'axios' 

const GET_HOUSES =      "GET_HOUSES"
const ADD_MORTGAGE =    "ADD_MORTGAGE"
const ADD_ADDRESS =     "ADD_ADDRESS"
const ADD_URL =         "ADD_URL"
const ADD_HOUSE =       "ADD_HOUSE"
const RESET =           "RESET"
const DELETE_HOUSE =    "DELETE_HOUSE"
const _FULFILLED =      "_FULFILLED"
// ,_PENDING       = '_PENDING'
// _REJECTED      = '_REJECTED';

const initialState = {
houses: [],
// STEP ONE
name: '',
address: '',
city: '',
state: '',
zipcode: '',

// STEPTWO
url: '',
// STEPTHREE
mortgage: '',
rent: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case DELETE_HOUSE + _FULFILLED:
        return Object.assign({}, state, {houses: action.payload.data})
        case GET_HOUSES + _FULFILLED:
        return Object.assign({}, state, {houses: action.payload.data} )
        case ADD_HOUSE:
        return Object.assign({}, state, {newHouse: action.payload.data})
        case ADD_ADDRESS:
        return Object.assign({}, state, {name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode})
        case ADD_MORTGAGE:
        return Object.assign({}, state, {mortgage: action.payload.mortgage, rent: action.payload.rent})
        case ADD_URL:
        return Object.assign({}, state, {url: action.payload})
        case RESET: 
        return Object.assign({}, initialState)
        default:
            return state
    }
}

export function getHouses(){
    const houses = axios.get('http://localhost:3001/api/houses')
    return {
        type: GET_HOUSES,
        payload: houses
    }
}

export  function deleteHouse(id){
    const newHouseList = axios.delete(`http://localhost:3001/api/houses/${id}`)
    return {
        type: DELETE_HOUSE,
        payload: newHouseList
    }
}

export function addHouse(newHouse){
    const {name, address, city, state, zipcode, url, mortgage, rent } = newHouse
    const home = {
        name, address, city, state, zipcode, url, mortgage, rent
    }
    const newProp = axios.post('http://localhost:3001/api/houses', home) 
    return {
        type: ADD_HOUSE,
        payload: newProp
    }
}

export function addMortgage(mortgage){
    return {
        type: ADD_MORTGAGE,
        payload: mortgage
    }
}

export function addAddress(address){
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}

export function addURL(url){
    return {
        type: ADD_URL,
        payload: url
    }
}

export function reset(){
return {
    type: RESET
}
}

