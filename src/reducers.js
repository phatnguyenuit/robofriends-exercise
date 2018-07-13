import {
    CHANGE_SEARCH_INPUT,
    REQUEST_ROBOS_PENDDING,
    REQUEST_ROBOS_SUCCESS,
    REQUEST_ROBOS_FAILED
} from './constants'

const initialSearch = {
    searchInput: ''
}

export const searchRobosReducer = (state=initialSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_INPUT:
            return  {...state, searchInput: action.payload};
        default:
            return state;
    }
}

const initialRobos = {
    isPendding: false,
    robos: [],
    error: ''
}
export const requestRobosReducer = (state=initialRobos, action={}) => {
    switch(action.type){
        case REQUEST_ROBOS_PENDDING:
            return  {...state, isPendding: true};
        case REQUEST_ROBOS_SUCCESS:
            return  {...state, robos: action.payload, isPendding: false};
        case REQUEST_ROBOS_FAILED:
            return  {...state, error: action.payload, isPendding: false};
        default:
            return state;
    }
}
