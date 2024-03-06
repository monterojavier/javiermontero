import React from "react";
import "./Resume.css";

import Experience from "./Experience";
import Education from "./Education";

import jsonEducation from "../../json/education.json";
import jsonExperience from "../../json/experience.json";

export default function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Experience experience={jsonExperience.experience} />
      <Education education={jsonEducation.education} />
    </article>
  );
}
