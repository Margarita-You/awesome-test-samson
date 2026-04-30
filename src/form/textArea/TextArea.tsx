// OptimizedTextarea.tsx
import { memo } from "react"
import styles from "../Form.module.scss"

interface TextareaProps {
  label: string
  id: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const Textarea: React.FC<TextareaProps> = memo(
  ({ label, id, placeholder, value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    }

    return (
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>
    )
  }
)
