// ColorSelect.tsx (оптимизированный, обёрнут в memo)
import React, { useState, useRef, useEffect, memo } from "react"
import styles from "./ColorSelect.module.scss"

interface ColorSelectProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

export const colors = [
  { value: "#0e0ec2" },
  { value: "#FF6B6B" },
  { value: "#FFA559" },
  { value: "#FFE268" },
  { value: "#6BCB77" },
  { value: "#9B59B6" },
]

export const ColorSelect: React.FC<ColorSelectProps> = memo(
  ({ selectedColor, onColorChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleToggle = () => setIsOpen((prev) => !prev)
    const handleSelect = (color: string) => {
      onColorChange(color)
      setIsOpen(false)
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
      <div className={styles.colorSelect} ref={containerRef}>
        <div className={styles.selectedBox} onClick={handleToggle}>
          <div
            className={styles.colorSwatch}
            style={{ backgroundColor: selectedColor }}
          />
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {colors.map((color) => (
              <div
                key={color.value}
                className={styles.colorOption}
                onClick={() => handleSelect(color.value)}
              >
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color.value }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
