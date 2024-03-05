import React, { useEffect, useContext } from "react";
import { Row, Col, Spinner, Card, Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Pokemon = () => {
  let { id } = useParams();
  const pokemonContext = useContext(PokemonContext);

  const { getPokemon, loading, pokemon } = pokemonContext;
  const {
    login,
    // node_id,
    avatar_url,
    // gravatar_id,
    // url,
    html_url,
    // followers_url,
    // following_url,
    // gists_url,
    // starred_url,
    // subscriptions_url,
    // organizations_url,
    // repos_url,
    // events_url,
    // received_events_url,
    // type,
    // site_admin,
    name,
    company,
    // blog,
    location,
    // email,
    // hireable,
    bio,
    // twitter_username,
    public_repos,
    public_gists,
    followers,
    following
    // created_at,
    // updated_at
  } = pokemon;

  useEffect(() => {
    getPokemon(id);
  }, []);

  if (loading)
    return (
      <div className="p-3 text-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <div className="p-3">
        <Card>
          <Card.Body>
            <Row>
              <Col
                md={6}
                className="text-center"
              >
                <Row>
                  <Col
                    lg={6}
                    className="text-start"
                  >
                    <Link
                      to={"/"}
                      className="btn btn-sm btn-secondary"
                    >
                      Back to search
                    </Link>
                    <div className="d-inline p-5">{login}</div>
                  </Col>
                </Row>
                <Image
                  src={avatar_url}
                  alt={login}
                  style={{ maxWidth: 300 }}
                  roundedCircle={true}
                  className="m-3"
                />
                <h2 className="p-1">{name}</h2>
                <h6>{location}</h6>
              </Col>
              <Col md={6}>
                {bio ? (
                  <p>
                    <b>Bio</b>
                    {bio}
                  </p>
                ) : (
                  <></>
                )}

                <div>Username: {login}</div>
                <div>Company: {company}</div>
                <div>Website: {company}</div>
                <p></p>
                <p>
                  <a
                    className="btn btn-dark"
                    href={html_url}
                    target="_blank"
                  >
                    View Profile
                  </a>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div className="px-3 mb-3">
        <Card>
          <Card.Body>
            <Row>
              <Col
                md={12}
                className="text-center"
              >
                <Button
                  type="button"
                  className="m-1 btn-sm btn-danger"
                >
                  Followrs: {followers}
                </Button>

                <Button
                  type="button"
                  className="m-1 btn-sm btn-success"
                >
                  Follwing: {following}
                </Button>

                <Button
                  type="button"
                  className="m-1 btn-sm btn-secondary"
                >
                  Public Repository: {public_repos}
                </Button>

                <Button
                  type="button"
                  className="m-1 btn-sm btn-dark"
                >
                  Public Gist: {public_gists}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pokemon;
