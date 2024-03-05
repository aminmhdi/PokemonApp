import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/layout/Navbar";
import Pokemon from "./components/pokemon/Pokemon";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import NotFound from "./components/pages/notfound";
import PokemonState from "./context/pokemon/pokemonState";

const App = () => {
  return (
    <PokemonState>
      <Router>
        <div className="app">
          <AppNavbar />
          <Routes>
            <Route
              exact
              path="/"
              Component={Home}
            />
            <Route
              exact
              path="/about"
              Component={About}
            />
            <Route
              exact
              path="/pokemon/:id"
              Component={Pokemon}
            />
            <Route
              path="*"
              Component={NotFound}
            />
          </Routes>
        </div>
      </Router>
    </PokemonState>
  );
};

export default App;
