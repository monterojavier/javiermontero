import "./Sidebar.css";
import avatar from "../../images/avatar.png";
import { IonIcon } from "@ionic/react";
import {
  phonePortraitOutline,
  mailOutline,
  locationOutline,
  logoTwitter,
  logoLinkedin,
  logoGithub,
  chevronDown,
} from "ionicons/icons";

import { useEffect, useRef, useCallback } from "react";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const sidebarBtnRef = useRef(null);

  // element toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  const handleSidebarToggle = useCallback(() =>
    elementToggleFunc(sidebarRef.current)
  );

  useEffect(() => {
    // sidebar variables
    const sidebarBtn = sidebarBtnRef.current;

    // sidebar toggle functionality for mobile
    sidebarBtn.addEventListener("click", handleSidebarToggle);
  });

  return (
    <aside ref={sidebarRef} className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Javier Montero" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Javier Montero">
            Javier Montero
          </h1>

          <p className="title">Software Engineer</p>
        </div>

        <button ref={sidebarBtnRef} className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown}></IonIcon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:monterodotjavier@icloud.com"
                className="contact-link"
              >
                monterodotjavier@icloud.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (916) 529-4606
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>New York, NY</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoTwitter}></IonIcon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoGithub}></IonIcon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoLinkedin}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
