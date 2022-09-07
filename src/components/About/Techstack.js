import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {DiJavascript1, DiReact, DiNodejs, DiGit} from 'react-icons/di';
import {SiFirebase} from 'react-icons/si';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}
