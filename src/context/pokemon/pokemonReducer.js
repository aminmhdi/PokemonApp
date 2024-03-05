import {
    SEARCH_POKEMONS,
    SET_LOADING,
    GET_POKEMON
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                loading: false
            }
        case SET_LOADING: return {
            ...state,
            loading: true
        };
        case GET_POKEMON: return{
            ...state,
            loading: false,
            pokemon: action.payload
        }
        default: return state;
    }
}