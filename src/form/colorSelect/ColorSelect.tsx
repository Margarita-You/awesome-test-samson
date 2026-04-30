import React, { useState, useRef, useEffect, memo } from "react"
import styles from "./ColorSelect.module.scss"
import { colors } from "./colors"

interface ColorSelectProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

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
