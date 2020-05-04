import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECH_ERRORS } from './types';
import axios from 'axios';

// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get('/techs');
        dispatch({
            type: GET_TECHS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TECH_ERRORS,
            payload: err.response.statusText
        });
    }
};

// Add Tech to server
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECH_ERRORS,
            payload: err.response.statusText
        });
    }
};

// Delete Log
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECH_ERRORS,
            payload: err.response.statusText
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type:SET_LOADING
    };
};
