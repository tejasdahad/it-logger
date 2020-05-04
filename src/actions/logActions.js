import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG} from './types';
import axios from 'axios';
//Also can be written this way but below code is more refactored.
//export const getLogs = () => {
// return async dispatch => {
//    
//}   
//}
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get('/logs');
        dispatch({
            type: GET_LOGS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
}

// Add Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
}

// Delete Log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`,{
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

export const setLoading = () => {
    return {
        type:SET_LOADING
    };
}

