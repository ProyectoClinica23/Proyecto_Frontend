import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: "Pregunta",
      id: 1,
      text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
      text: "Pregunta",
      id: 2,
      text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
      text: "Pregunta",
      id: 3,
      text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
    {
      text: "Pregunta",
      id: 4,
      text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    },
  ];

  return (
    <div name="Nosotros" className={styles.howWeWork}>
      <h2 className={styles.title}>Preguntas Frecuentes</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} text2={x.text2} />
      ))}
    </div>
  );
};

export default HowWeWork;
