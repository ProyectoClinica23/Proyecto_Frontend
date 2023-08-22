import React from "react";
import styles from "./Step.module.css";

const Step = ({ text, step, text2 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <p className={styles.stepNumber}>{step}</p>
        <p className={styles.text}>{text}</p>
      </div>
        <p className={styles.text2}>{text2}</p>
      <div className={styles.stepBorder}></div>
    </div>
  );
};

export default Step;
