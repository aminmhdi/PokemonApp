import React from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="p-3">
      <Card>
        <CardBody>
          <Row>
            <Col lg={12}>
              <h1>
                <p>About this application</p>
              </h1>
            </Col>
            <Col lg={12}>
              <p>App to search pokemon for simplilearn course</p>
            </Col>
            <Col lg={12}>
              Developed by:{" "}
              <a href="https://www.linkedin.com/in/aminmohamadi/">
                Amin Mohammadi
              </a>
            </Col>
            <Col lg={12}>
              Github:{" "}
              <a
                className="no"
                href="https://github.com/aminmhdi/PokemonApp"
              >
                https://github.com/aminmhdi/PokemonApp
              </a>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
