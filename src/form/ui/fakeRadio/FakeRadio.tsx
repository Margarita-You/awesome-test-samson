import { memo } from "react"
import styles from "../Form.module.scss"

interface FakeRadioProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export const FakeRadio: React.FC<FakeRadioProps> = memo(
  ({ label, checked, onChange }) => (
    <div className={styles.radioGroup}>
      <label className={styles.radioCheckbox}>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.customRadio} />
        {label}
      </label>
    </div>
  )
)
