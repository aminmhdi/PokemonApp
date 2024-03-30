import {
  SEARCH_POKEMONS,
  SET_LOADING,
  SEARCH_ERROR,
  SET_POKEMON_PAGE_SIZE,
  SET_POKEMON_SEARCH_NAME,
  SET_POKEMON_SEARCH_TYPE
} from "./types";

// get logs from server
export const searchPokemon =
  ({ name, type, page, size }) =>
  async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING });

      let path = `/pokemons?_page=${page}&_per_page=${size}`;
      if (name) path += `&name=${name}`;
      if (type) path += `&type=${type}`;
      const res = await fetch(path);
      const data = await res.json();

      dispatch({
        type: SEARCH_POKEMONS,
        payload: data
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: SEARCH_ERROR,
        payload: err
      });
    }
  };

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// set page size
export const setPokemonPageSize = (pageSize) => {
  return {
    type: SET_POKEMON_PAGE_SIZE,
    payload: pageSize
  };
};

// set search name
export const setPokemonSearchName = (name) => {
  return {
    type: SET_POKEMON_SEARCH_NAME,
    payload: name
  };
};

// set search type
export const setPokemonSearchType = (type) => {
  return {
    type: SET_POKEMON_SEARCH_TYPE,
    payload: type
  };
};
