import React, { useState } from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const PokemonSearch = ({ searchPokemon }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchPokemon(text);
    setText(text);
  };

  const onChange = (e) => setText(e.target.value);

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
                lg={3}
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Keyword..."
                  className="form-control"
                  value={text}
                  onChange={onChange}
                />
              </Col>
              <Col
                sm={3}
                md={3}
                lg={2}
              >
                <div className="d-grid">
                  <Button
                    className="btn btn-block btn-primary"
                    type="submit"
                  >
                    <Search />
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

Search.propTypes = {
  searchPokemon: PropTypes.func.isRequired
};

export default PokemonSearch;
