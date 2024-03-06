import React from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";

function Experience({ experience }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline}></IonIcon>
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {experience.toReversed().map((theJob) => {
          return (
            <li className="timeline-item" key={theJob.id}>
              <h4 className="h4 timeline-item-title">
                <strong>{theJob.company}</strong> - {theJob.title}
              </h4>

              <span>{theJob.date}</span>

              <ul>
                {theJob.responsibilities.map((responsibility, index) => {
                  return (
                    <li className="list-responsibilities" key={index}>
                      <p className="timeline-text li-p-responsibility">
                        {responsibility}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Experience;
