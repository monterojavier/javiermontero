import React from "react";

import "./About.css";

export default function About() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hello! I'm Javier, a software engineer with experience in the Tech
          Industry.
        </p>

        <p>
          As a software engineer: I've had experience at 3 organizations where
          they've had me creating new features, bug fixes, improving the code
          base, and most important improving my skills every day as a developer.
          I'm a proactive achiever with a proven ability to deliver results.
        </p>

        <p>
          Skilled at front-end development, back-end development, databases,
          agile methodology, continuous integration/continuous deployment,
          cybersecurity awareness, version controls, code review, RESTful APIs.
        </p>

        <p>Outside from software engineering? Who am I?</p>
        <ul>
          <li>Driven & ambitious</li>
          <li>Travel enthusiast</li>
          <li>Tech aficionado</li>
          <li>Learning Chinese/Mandarin (I speak English and Spanish)</li>

          <strong>Thanks for stopping by!!</strong>
        </ul>
      </section>
    </article>
  );
}
