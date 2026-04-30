import React, { memo } from "react"
import styles from "../Form.module.scss"

interface InputProps {
  label: string
  id: string
  placeholder?: string
  value: string
  maxLength?: number
  onChange: (value: string) => void
}

export const Input: React.FC<InputProps> = memo(
  ({ label, id, placeholder, value, maxLength, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    }

    return (
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          type='text'
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.input}
          maxLength={maxLength}
          autoComplete='off'
        />
      </div>
    )
  }
)
