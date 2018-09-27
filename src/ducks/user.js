import axios from 'axios'

const GET_HOUSES = "GET_HOUSES"
const ADD_HOUSE = "ADD_HOUSE"
const DELETE_HOUSE = "DELETE_HOUSE"
const _FULFILLED     = '_FULFILLED'
// ,_PENDING       = '_PENDING'
// _REJECTED      = '_REJECTED';

const initialState = {
houses: [],
newHouseList: [],
newHouse: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case DELETE_HOUSE + _FULFILLED:
        return Object.assign({}, state, {newHouseLIst: action.payload.data})
        case GET_HOUSES + _FULFILLED:
        return Object.assign({}, state, {houses: action.payload.data} )
        case ADD_HOUSE:
        return Object.assign({}, state, {newHouse: action.payload.data})
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

export function deleteHouse(id){
    console.log('hit ducks delete')
    const newHouseList = axios.delete(`http://localhost:3001/api/houses/${id}`)
    return {
        type: DELETE_HOUSE,
        payload: newHouseList
    }
}

export function addHouse(house){
    const newHouse = axios.post('http://localhost:3001/api/houses', house) 
    return {
        type: ADD_HOUSE,
        payload: newHouse
    }
}

