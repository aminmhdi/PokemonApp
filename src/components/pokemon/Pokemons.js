import React, { useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { Alert, Card, CardBody, Col, Row, Spinner } from "react-bootstrap";
import { ExclamationCircle } from "react-bootstrap-icons";
import { connect } from "react-redux";
import {
  searchPokemon,
  setPokemonPageSize
} from "../../actions/pokemonActions";
import PropTypes from "prop-types";
import PokemonPagination from "./PokemonPagination";

const Pokemons = ({
  pokemon: { search, pagedList, loading },
  searchPokemon,
  setPokemonPageSize
}) => {
  useEffect(() => {
    searchPokemon({ page: 1, size: search.pageSize });
    // eslint-disable-next-line
  }, []);

  const onPageSizeChange = (newPageSize) => {
    setPokemonPageSize(newPageSize);
    searchPokemon({
      name: search.name,
      type: search.type,
      size: newPageSize,
      page: 1
    });
  };

  if ((loading && pagedList == null) || pagedList.data == null) {
    return (
      <div className="px-3 text-center">
        <Card>
          <CardBody>
            <Spinner variant="primary" />
          </CardBody>
        </Card>
      </div>
    );
  } else if (
    pagedList == null ||
    pagedList.data == null ||
    pagedList.data.length === 0
  ) {
    return (
      <div className="px-3">
        <Card>
          <CardBody>
            <Row>
              <Col lg="12">
                <Alert className="alert-warning text-center">
                  <ExclamationCircle />
                  No records were found!
                </Alert>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="px-3">
        <Card>
          <CardBody>
            <div className="position-relative">
              {loading && (
                <div className="position-absolute loading-overlay">
                  <Spinner variant="primary" />
                </div>
              )}
              <Row>
                <Col
                  lg="12"
                  className="disabled"
                >
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Type</th>
                          <th>HP</th>
                          <th>Attack</th>
                          <th>Defence</th>
                          <th>Attack Speed</th>
                          <th>Defence Speed</th>
                          <th>Speed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pagedList.data.map((pokemon) => {
                          return (
                            <PokemonItem
                              key={pokemon.id}
                              pokemon={pokemon}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg="12">
                  <PokemonPagination
                    pagedList={pagedList}
                    searchPokemon={searchPokemon}
                    onPageSizeChange={onPageSizeChange}
                    search={search}
                  />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
};

Pokemons.propTypes = {
  pokemon: PropTypes.object.isRequired,
  searchPokemon: PropTypes.func.isRequired,
  setPokemonPageSize: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, { searchPokemon, setPokemonPageSize })(
  Pokemons
);
