import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from 'react-icons/si';

export default function Toolstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}
