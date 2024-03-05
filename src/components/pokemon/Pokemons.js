import React, { useContext, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import PropTyes from "prop-types";
import { ExclamationCircle } from "react-bootstrap-icons";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Pokemons = () => {
  const pokemonContext = useContext(PokemonContext);
  const { loading, pokemons } = pokemonContext;

  useEffect(() => {
    setTimeout(() => {
        pokemonContext.searchPokemon('');
    }, 200);
  }, []);

  if (loading) {
    return (
      <div className="p-3 text-center">
        <Spinner />
      </div>
    );
  } else if (pokemons.length === 0) {
    return (
      <div className="px-3">
        <Row>
          <Col lg="12">
            <Alert className="alert-warning text-center">
              <ExclamationCircle />
              No records were found!
            </Alert>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="px-3">
        <Row>
          {pokemons.map((pokemon) => {
            return (
              <Col
                lg="3"
                md="4"
                sm="6"
                className="mb-4"
              >
                <PokemonItem
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
};
Pokemons.propTyes = {
  // pokemons: PropTyes.array.isRequired,
  // loading: PropTyes.bool.isRequired
};
export default Pokemons;
