// ExpandableText.tsx
import React, { useState } from "react"

interface ExpandableTextProps {
  text: string
  children: React.ReactNode
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <div>
      <div
        onClick={toggle}
        style={{
          cursor: "pointer",
          userSelect: "none",
          fontSize: "20px",
          padding: "20px",
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}
