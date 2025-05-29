"use client"

import { FloatContainer } from "react-slide-craft"

export const SlideHoverGlass = ({ children } : { children: React.ReactNode }) => {
  return (
    <FloatContainer
      width="100%"
      height="100%"
      backgroundColor="var(--color-white"
      containerStyle={{
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </FloatContainer>
  )
}
