import React, { Fragment } from "react";
import PokemonSearch from "../pokemon/PokemonSearch";
import Pokemons from "../pokemon/Pokemons";

const Home = () => {
  return (
    <Fragment>
      <PokemonSearch />
      <Pokemons />
    </Fragment>
  );
};

export default Home;
