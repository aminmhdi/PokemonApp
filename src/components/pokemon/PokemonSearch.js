import React, { useRef } from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import {
  searchPokemon,
  setPokemonSearchName,
  setPokemonSearchType
} from "../../actions/pokemonActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PokemonSearch = ({
  pokemon: { search, loading },
  searchPokemon,
  setPokemonSearchName,
  setPokemonSearchType
}) => {
  const name = useRef("");
  const type = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemonSearchName(name.current.value);
    setPokemonSearchType(type.current.value);
    searchPokemon({
      name: name.current.value,
      type: type.current.value,
      page: 1,
      size: search.pageSize
    });
  };

  return (
    <div className="p-3">
      <Card>
        <Card.Body className="text-center">
          <Form
            onSubmit={onSubmit}
            className="form"
          >
            <Row>
              <Col
                sm={6}
                md={4}
                lg={5}
                className="p-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  ref={name}
                />
              </Col>
              <Col
                sm={6}
                md={4}
                lg={5}
                className="p-2"
              >
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="form-control"
                  ref={type}
                />
              </Col>
              <Col
                sm={12}
                md={4}
                lg={2}
                className="p-2"
              >
                <div className="d-grid">
                  <Button
                    className="btn btn-block btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <Search />
                    )}{" "}
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

PokemonSearch.propTypes = {
  searchPokemon: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, {
  searchPokemon,
  setPokemonSearchName,
  setPokemonSearchType
})(PokemonSearch);
