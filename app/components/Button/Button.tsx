import styles from "./Button.module.scss";
import React from "react";
import { ButtonProps } from "./button.type";

const Button: React.FC<ButtonProps> = ({
  title,
  variants = "primary",
  size = "medium",
  type = "button",
  onClick,
  disabled = false,
  loadging = false,
  leftIcon,
  rightIcon,
  className,
  fullWidth = false,
  children,
}) => {
  const buttonClasses = [
    `${styles.button}`,
    `${styles[variants]}`,
    `${styles[size]}`,
    disabled ? styles.disabled : "",
    fullWidth ? styles.fullWidth : "",
    className || "",
  ]
    .join(" ")
    .trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
