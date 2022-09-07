import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import "./Projects.css";

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#363032" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card
              isBlog={false}
              title="TIM"
              description="Messenger application that allows user to message between eachother and they translate in real time."
              ghLink="https://github.com/t-instant-messenger/t-instant-messenger-server"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
