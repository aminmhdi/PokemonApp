import React from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg={12}>
            <p>
              <h1>About this application</h1>
            </p>
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
            <p>Version 1.0</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default About;
