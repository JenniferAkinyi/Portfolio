import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with a passion for creating visually appealing,
                user-friendly, and highly optimized web applications. With a strong foundation 
                in HTML, CSS, and JavaScript, I specialize in building responsive websites that 
                provide seamless user experiences across all devices.
                I have hands-on experience with modern frontend frameworks and libraries,
                particularly React.js, and I'm proficient in using tools like Vite for fast and efficient project development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience with Firebase for backend integration, enabling me to build full-stack applications 
              with real-time database capabilities.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};