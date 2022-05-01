import React, { memo } from "react";
import styles from "./TextInput.module.css";

/** Standard Text Input UI element to be used throughout the app */
const Button: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = memo((props) => (
  <input data-testid="input" className={styles.Input} {...props} />
));

export default Button;
