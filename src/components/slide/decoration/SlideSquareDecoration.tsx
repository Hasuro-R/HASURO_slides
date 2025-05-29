"use client"

import { FloatContainer, Spacer } from "react-slide-craft"

export const SlideSquareDecoration = ({
  size, top, bottom, left, right,
} : {
  size: string, top?: string, bottom?: string, left?: string, right?: string,
}) => {
  return (
    <FloatContainer
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      backgroundColor="var(--color-dark)"
    >
      <Spacer width={size} height={size} />
    </FloatContainer>
  )
}

