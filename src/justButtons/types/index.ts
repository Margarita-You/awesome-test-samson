export type ButtonVariant = "colored" | "outline" | "arrow"

export type ButtonColor = "red" | "green"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  children: React.ReactNode
}
