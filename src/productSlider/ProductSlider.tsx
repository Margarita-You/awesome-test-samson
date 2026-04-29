// ProductSlider.tsx
import React, { useRef, useState } from "react"
import styles from "./ProductSlider.module.scss"

export interface Product {
  id: string | number
  title: string
  image: string // URL изображения
}

interface ProductSliderProps {
  products: Product[]
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Touch events для мобильных
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current
    if (!container) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
    document.body.style.userSelect = "none"
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const container = scrollContainerRef.current
    if (!container) return
    const x = e.touches[0].pageX - container.offsetLeft
    const walk = (x - startX) * 1.5
    container.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    document.body.style.userSelect = ""
  }

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderContainer}
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.sliderTrack}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <p className={styles.title}>{product.title}</p>
            </div>
          ))}
        </div>
        {/* Градиент в конце строки */}
        <div className={styles.gradientOverlay} />
      </div>
    </div>
  )
}
