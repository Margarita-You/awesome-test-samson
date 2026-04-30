import React, { useRef, useEffect, useState } from "react"
import styles from "./ToggleSwitch.module.css"

type Props = {
  defaultEnabled: boolean
  onChange?: (enabled: boolean) => void
}

export const ToggleSwitch: React.FC<Props> = ({ defaultEnabled, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animating, setAnimating] = useState(false)
  const [enabled, setEnabled] = useState<boolean>(defaultEnabled)
  const animationRef = useRef<number>(null)
  const startOffset = useRef(0)
  const targetOffset = useRef(0)
  const startPos = useRef(0)
  const targetPos = useRef(0)
  const startTime = useRef(0)
  // Для выключенного (красный) offset = -1, для включённого (зелёный) offset = +1
  const currentOffset = useRef(defaultEnabled ? 1 : -1)
  const currentPos = useRef(defaultEnabled ? 22 : -22)
  const DURATION = 800
  const SHIFT = 22
  const RADIUS = 24
  const TRACK_Y = 38
  const TRACK_WIDTH = 88
  const TRACK_HEIGHT = 48
  const TRACK_RADIUS = 50

  const drawTrack = (
    ctx: CanvasRenderingContext2D,
    w: number,
    normalizedOffset: number
  ) => {
    const trackX = (w - TRACK_WIDTH) / 2
    const trackY = TRACK_Y - TRACK_HEIGHT / 2
    const radius = TRACK_RADIUS

    ctx.shadowColor = "rgba(0,0,0,0.25)"
    ctx.shadowBlur = 6
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 3

    const borderWidth = 8
    ctx.beginPath()
    ctx.roundRect(
      trackX - borderWidth,
      trackY - borderWidth,
      TRACK_WIDTH + borderWidth * 2,
      TRACK_HEIGHT + borderWidth * 2,
      radius + 2
    )
    const wallGrad = ctx.createLinearGradient(
      trackX - borderWidth,
      trackY - borderWidth,
      trackX + TRACK_WIDTH + borderWidth,
      trackY + TRACK_HEIGHT + borderWidth
    )
    wallGrad.addColorStop(0, "#e0e4e8")
    wallGrad.addColorStop(1, "#a0a5ae")
    ctx.fillStyle = wallGrad
    ctx.fill()

    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.beginPath()
    ctx.roundRect(trackX, trackY, TRACK_WIDTH, TRACK_HEIGHT, radius)
    ctx.fillStyle = "#c0c5ce"
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.roundRect(trackX, trackY, TRACK_WIDTH, TRACK_HEIGHT, radius)
    ctx.clip()

    const borderX = trackX + ((normalizedOffset + 1) / 2) * TRACK_WIDTH
    // Левая часть дна — зелёная (включённое состояние), правая — красная (выключенное)
    ctx.beginPath()
    ctx.rect(trackX, trackY, borderX - trackX, TRACK_HEIGHT)
    ctx.fillStyle = "#1caf24" // зелёный
    ctx.fill()

    ctx.beginPath()
    ctx.rect(borderX, trackY, trackX + TRACK_WIDTH - borderX, TRACK_HEIGHT)
    ctx.fillStyle = "#d84947" // красный
    ctx.fill()
    ctx.restore()

    // Тени и блики
    ctx.save()
    ctx.beginPath()
    ctx.roundRect(trackX, trackY, TRACK_WIDTH, TRACK_HEIGHT, radius)
    ctx.clip()

    const innerShadowGrad = ctx.createLinearGradient(
      trackX,
      trackY,
      trackX,
      trackY + TRACK_HEIGHT
    )
    innerShadowGrad.addColorStop(0, "rgba(0,0,0,0.15)")
    innerShadowGrad.addColorStop(0.3, "rgba(0,0,0,0.02)")
    innerShadowGrad.addColorStop(0.7, "rgba(0,0,0,0.05)")
    innerShadowGrad.addColorStop(1, "rgba(0,0,0,0.25)")
    ctx.fillStyle = innerShadowGrad
    ctx.fillRect(trackX, trackY, TRACK_WIDTH, TRACK_HEIGHT)

    const sideShadow = ctx.createLinearGradient(
      trackX,
      trackY,
      trackX + TRACK_WIDTH,
      trackY
    )
    sideShadow.addColorStop(0, "rgba(0,0,0,0.2)")
    sideShadow.addColorStop(0.1, "rgba(0,0,0,0.02)")
    sideShadow.addColorStop(0.9, "rgba(0,0,0,0.02)")
    sideShadow.addColorStop(1, "rgba(0,0,0,0.2)")
    ctx.fillStyle = sideShadow
    ctx.fillRect(trackX, trackY, TRACK_WIDTH, TRACK_HEIGHT)
    ctx.restore()

    ctx.beginPath()
    ctx.roundRect(
      trackX - borderWidth,
      trackY - borderWidth,
      TRACK_WIDTH + borderWidth * 2,
      2,
      radius + 2
    )
    ctx.fillStyle = "rgba(255,255,255,0.6)"
    ctx.fill()
  }

  const drawBall = (normalizedOffset: number, shiftX: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const w = canvas.width,
      h = canvas.height
    const centerX = w / 2 + shiftX
    const centerY = TRACK_Y
    const radius = RADIUS
    const borderX = centerX + normalizedOffset * radius

    ctx.clearRect(0, 0, w, h)
    drawTrack(ctx, w, normalizedOffset)

    // Тень от шара
    ctx.shadowColor = "rgba(0,0,0,0.4)"
    ctx.shadowBlur = 8
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 3
    ctx.beginPath()
    ctx.arc(centerX, centerY + 2, radius * 0.9, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(0,0,0,0.35)"
    ctx.fill()
    ctx.shadowColor = "transparent"

    ctx.save()
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.clip()

    // Левая половина — зелёная (включён), правая — красная (выключён)
    ctx.beginPath()
    ctx.rect(0, 0, borderX, h)
    ctx.fillStyle = "#43dd4b" // зелёный
    ctx.fill()

    ctx.beginPath()
    ctx.rect(borderX, 0, w - borderX, h)
    ctx.fillStyle = "#ee5855" // красный
    ctx.fill()
    ctx.restore()

    // Блик
    const grad = ctx.createRadialGradient(
      centerX - radius * 0.2,
      centerY - radius * 0.2,
      radius * 0.1,
      centerX,
      centerY,
      radius
    )
    grad.addColorStop(0, "rgba(255,255,255,0.9)")
    grad.addColorStop(0.4, "rgba(255,255,255,0.2)")
    grad.addColorStop(0.7, "rgba(0,0,0,0.1)")
    grad.addColorStop(1, "rgba(0,0,0,0.4)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  const animate = (now: number) => {
    const elapsed = now - startTime.current
    let t = Math.min(1, elapsed / DURATION)
    const ease = 1 - Math.pow(1 - t, 3)
    const newOffset =
      startOffset.current + (targetOffset.current - startOffset.current) * ease
    const newPos =
      startPos.current + (targetPos.current - startPos.current) * ease
    currentOffset.current = newOffset
    currentPos.current = newPos
    drawBall(newOffset, newPos)
    if (t < 1) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setAnimating(false)
      drawBall(targetOffset.current, targetPos.current)
      currentOffset.current = targetOffset.current
      currentPos.current = targetPos.current
    }
  }

  const startToggle = (newEnabled: boolean) => {
    if (animating) return
    setAnimating(true)
    startOffset.current = currentOffset.current
    startPos.current = currentPos.current
    targetOffset.current = newEnabled ? 1 : -1
    targetPos.current = newEnabled ? SHIFT : -SHIFT
    startTime.current = performance.now()
    animationRef.current = requestAnimationFrame(animate)
    setEnabled(newEnabled)
    onChange?.(newEnabled)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = 120
      canvas.height = 90
      if (!(window as any).CanvasRenderingContext2D.prototype.roundRect) {
        ;(window as any).CanvasRenderingContext2D.prototype.roundRect =
          function (x: number, y: number, w: number, h: number, r: number) {
            if (w < 2 * r) r = w / 2
            if (h < 2 * r) r = h / 2
            this.moveTo(x + r, y)
            this.lineTo(x + w - r, y)
            this.quadraticCurveTo(x + w, y, x + w, y + r)
            this.lineTo(x + w, y + h - r)
            this.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
            this.lineTo(x + r, y + h)
            this.quadraticCurveTo(x, y + h, x, y + h - r)
            this.lineTo(x, y + r)
            this.quadraticCurveTo(x, y, x + r, y)
            return this
          }
      }
      drawBall(currentOffset.current, currentPos.current)
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    if (!animating) {
      const targetOffsetVal = enabled ? 1 : -1
      const targetPosVal = enabled ? SHIFT : -SHIFT
      if (
        Math.abs(currentOffset.current - targetOffsetVal) > 0.01 ||
        Math.abs(currentPos.current - targetPosVal) > 0.01
      ) {
        currentOffset.current = targetOffsetVal
        currentPos.current = targetPosVal
        drawBall(targetOffsetVal, targetPosVal)
      }
    }
  }, [enabled, animating])

  return (
    <div
      className={styles.toggleContainer}
      onClick={() => startToggle(!enabled)}
    >
      <canvas
        ref={canvasRef}
        width={120}
        height={90}
        className={styles.canvas}
      />
    </div>
  )
}
