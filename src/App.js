import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/layout/Navbar";
import Pokemons from "./components/pokemon/Pokemons";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonSearch from "./components/pokemon/PokemonSearch";
import About from "./components/pages/about";
import axios from "axios";
import PokemonState from './context/pokemon/pokemonState'
import PokemonContext from './context/pokemon/pokemonContext'

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});

  return (
    <PokemonState>
      <Router>
        <div className="app">
          <AppNavbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <PokemonSearch />
                  <Pokemons />
                </>
              }
            />
            <Route
              exact
              path="/about"
              Component={About}
            />
            <Route
              exact
              path="/pokemon/:id"
              element={
                <Pokemon
                  pokemon={pokemon}
                  loading={true}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </PokemonState>
  );
};

export default App;
