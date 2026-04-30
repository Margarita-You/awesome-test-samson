// OptimizedCheckbox.tsx
import { memo } from "react"
import styles from "../Form.module.scss"

interface CheckboxProps {
  label: string | React.ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = memo(
  ({ label, checked, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked)
    }

    return (
      <div className={styles.field}>
        <label className={styles.checkboxLabel}>
          <input type='checkbox' checked={checked} onChange={handleChange} />
          {label}
        </label>
      </div>
    )
  }
)
