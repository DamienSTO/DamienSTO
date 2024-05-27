import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>CIOBANU Damien</h1>
        <p className={styles.description}>
          Je suis un développeur Front-End et Back-End avec 2 ans d'expérience
          dans l'utilisation de React et JavaScript. N'hésitez pas à me
          contacter si vous souhaitez en savoir plus !
        </p>
        <a href="mailto:damienciobanu@gmail.com" className={styles.contactBtn}>
          Contactez moi !
        </a>
      </div>
      <img
        src={getImageUrl("hero/zoro.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
