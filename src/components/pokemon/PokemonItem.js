import React from "react";
import { Card, Image } from "react-bootstrap";
import PropTyes from "prop-types";
import { Link } from "react-router-dom";
const PokemonItem = ({ pokemon: { id, login, avatar_url, html_url } }) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Image
          src={avatar_url}
          alt={login}
          style={{ maxWidth: 100 }}
          roundedCircle={true}
        ></Image>
        <h3>{login}</h3>

        <div>
          <Link
            to={`/pokemon/${id}`}
            className="btn btn-dark btn-sm my-1"
          >
            More
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
PokemonItem.propTyes = {
  pokemon: PropTyes.object.isRequired
};
export default PokemonItem;
