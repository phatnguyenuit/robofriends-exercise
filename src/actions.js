import {
    CHANGE_SEARCH_INPUT,
    REQUEST_ROBOS_PENDDING,
    REQUEST_ROBOS_SUCCESS,
    REQUEST_ROBOS_FAILED
} from './constants'

export const setSearchInput = text => ({
    type: CHANGE_SEARCH_INPUT,
    payload: text,
});

export const requestRobos = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOS_PENDDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOS_FAILED, payload: error}))
}

