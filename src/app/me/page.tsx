"use client"

import { genSlideObject, SlideCore } from "react-slide-craft"
import { EndSlide } from "../components/common/slides/EndSlide"
import { useColors } from "@/hooks/useColors"
import { Zen_Maru_Gothic } from "next/font/google"
import { AboutMeSlide } from "./(slide)/AboutMeSlide"
import { CoverSlide } from "./(slide)/CoverSlide"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  preload: false,
})

export default function MePage() {
  const colors = useColors()

  const slides = [
    CoverSlide,
    AboutMeSlide,
    genSlideObject(EndSlide, { isBaseStyle: true }),
  ]

  return (
    <SlideCore
      slides={slides}
      baseSlideStyle={{
        textColor: colors("dark", "text"),
        backgroundColor: colors("light", "bg"),
        fontFamily: zenMaruGothic.style.fontFamily,
      }}
      isShowSlideButtonAlways
      isShowSlideButtonIndex={false}
    />
  )
}
