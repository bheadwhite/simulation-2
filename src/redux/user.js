const UPDATE_COMPONENT = "UPDATE_COMPONENT"
//redux promise middleware.
const initialState = {
houses: []
}

const fetch = axios.get('http://localhost:3001/api/houses').then(res =>{this.setState})

export default function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_COMPONENT:
        return Object.assign({}, state, )
        default:
            return state
    }
}

export function updateComponent(comp){
    return {
        type: UPDATE_COMPONENT,
        payload: comp
    }
}

//dispatch will trigger all changes to redux.
