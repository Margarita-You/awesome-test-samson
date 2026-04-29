import React from "react"
import classNames from "classnames"
import styles from "./Button.module.scss"
import { type ButtonProps } from "../types"

export const Button: React.FC<ButtonProps> = ({
  variant = "",
  color = "",
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles[variant]]: variant,
      [styles[color]]: color,
      [styles.fullWidth]: fullWidth,
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children && <span className={styles.label}>{children}</span>}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  )
}
