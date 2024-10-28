import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="jennifer.o.akinyi@gmail.com">jennifer.o.akinyi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jennifer-akinyi-72447b290/">linkedin.com/JenniferAkinyi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Jenniferkinyi">github.com/Jenniferkinyi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/msword.png")} alt="Word icon" />
          <a href="https://docs.google.com/document/d/1BUZ4tC9jPkZ_0TKtwGPgOEuGsQnVWZNk9EYVWfzXsjI/edit?usp=drive_link">Autobiography</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/resume.png")} alt="resume icon" />
          <a href="https://drive.google.com/drive/folders/1xRAU4sJu8A5CKkhbw6MrO7Ya5xaXvKrN?usp=drive_link">My Resume</a>
        </li>
      </ul>
    </footer>
  );
};