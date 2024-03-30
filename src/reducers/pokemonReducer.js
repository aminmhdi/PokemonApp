import {
  SEARCH_POKEMONS,
  SET_LOADING,
  SEARCH_ERROR,
  SET_POKEMON_PAGE_SIZE,
  SET_POKEMON_SEARCH_NAME,
  SET_POKEMON_SEARCH_TYPE
} from "../actions/types";

const initialState = {
  search: {
    name: null,
    type: null,
    pageSize: 10
  },
  pagedList: null,
  loading: true,
  error: null
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMONS:
      return {
        ...state,
        pagedList: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_POKEMON_PAGE_SIZE:
      return {
        ...state,
        search: {
          ...state.search,
          pageSize: action.payload
        }
      };
    case SET_POKEMON_SEARCH_NAME:
      return {
        ...state,
        search: {
          ...state.search,
          name: action.payload
        }
      };
    case SET_POKEMON_SEARCH_TYPE:
      return {
        ...state,
        search: {
          ...state.search,
          type: action.payload
        }
      };
    default:
      return state;
  }
};

export default pokemonReducer;
