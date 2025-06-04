"use client"

import { useColors } from "@/hooks/useColors"
import { CoverSlideTemplate, SlideBase } from "react-slide-craft"

export const CoverSlide = () => {
  const colors = useColors()

  return (
    <SlideBase backgroundColor={colors("dark", "bg")} textColor={colors("light", "text")}>
      <CoverSlideTemplate
        title="About Me"
        subTitle="Created by RSC"
        subTitleColor={colors("pale", "text")}
        align="center"
      />
    </SlideBase>
  )
}
