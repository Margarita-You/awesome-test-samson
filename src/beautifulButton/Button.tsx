import styles from "./Button.module.scss"
import classNames from "classnames"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={classNames(styles.button, className)} {...props}>
        {children}
      </button>
    </div>
  )
}
