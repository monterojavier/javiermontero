import React from 'react';
import Card from 'react-bootstrap/Card';
import {ImPointRight} from 'react-icons/im';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hey I'm <span style={{color: '#BF894A'}}>Javier Montero </span>
            <br />I am a software engineer currenting working an an apprentice
            at Google.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              Making Things Work
            </li>
            <li className="about-activity">
              <ImPointRight />
              Learning new skills
            </li>
          </ul>

          <p style={{color: '#BF894A'}}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Javier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
