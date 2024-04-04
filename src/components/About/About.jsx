import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [hoveredItemTop, setHoveredItemTop] = useState(null);

  const handleMouseEnter = (event) => {
    const hoveredItem = event.currentTarget;
    const imageTop = hoveredItem.offsetTop + hoveredItem.offsetHeight / 2;
    setHoveredItemTop(imageTop);
  };

  const handleMouseLeave = () => {
    setHoveredItemTop(null);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>A propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/luffy-icegif-26.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          style={{ top: hoveredItemTop ? `${hoveredItemTop}px` : "50%" }}
        />
        <ul className={styles.aboutItems}>
          <li
            className={styles.aboutItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Je suis un développeur frontend avec de l'expérience dans la
                création de sites réactifs et optimisés.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                J'ai de l'expérience dans le développement de systèmes back-end
                rapides et optimisés ainsi que d'APIs.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                J'ai conçu plusieurs pages web et je sais plutôt bien designer
                des sites .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
