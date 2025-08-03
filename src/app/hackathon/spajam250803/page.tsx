"use client"

import { genSlideObject, SlideCore } from "react-slide-craft"
import { EndSlide } from "../../components/common/slides/EndSlide"
import { useColors } from "@/hooks/useColors"
import { Zen_Maru_Gothic } from "next/font/google"

import { CoverSlide } from "./(slides)/CoverSlide"
import { ProblemSlide } from "./(slides)/ProblemSlide"
import { ConceptSlide } from "./(slides)/ConceptSlide"
import { OverviewSlide } from "./(slides)/OverviewSlide"
import { FeaturesSlide1 } from "./(slides)/FeaturesSlide1"
import { FeaturesSlide2 } from "./(slides)/FeaturesSlide2"
import { FeaturesSlide3 } from "./(slides)/FeaturesSlide3"
import { FeaturesSlide4 } from "./(slides)/FeaturesSlide4"
import { TechStackSlide } from "./(slides)/TechStackSlide"
import { DemoSlide } from "./(slides)/DemoSlide"
import { TeamSlide } from "./(slides)/TeamSlide"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  preload: false,
})

export default function Spajam250803Page() {
  const colors = useColors()

  const slides = [
    CoverSlide,
    TeamSlide,
    ProblemSlide,
    ConceptSlide,
    OverviewSlide,
    FeaturesSlide1,
    FeaturesSlide2,
    FeaturesSlide3,
    FeaturesSlide4,
    TechStackSlide,
    DemoSlide,
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
    />
  )
}