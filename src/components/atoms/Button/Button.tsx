import React, { PropsWithChildren, memo } from "react";
import styles from "./Button.module.css";

/** Standard Button UI element to be used throughout the app */
const Button: React.FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = memo(({ children, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={styles.Button} {...rest}>
    {children}
  </button>
));

export default Button;
