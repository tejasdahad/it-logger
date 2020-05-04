import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECH_ERRORS } from '../actions/types';

const initialState = {
    techs: null,
    error: null,
    loading: false
};

export default (state= initialState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            };
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            };
        case TECH_ERRORS:
            console.error(action.payload);
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading:false
            };
        default:
            return state;
    }
};