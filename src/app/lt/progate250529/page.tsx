"use client"

import { genSlideObject, SlideCore } from "react-slide-craft"
import { CoverSlide } from "./(slides)/CoverSlide"
import { Zen_Maru_Gothic } from "next/font/google"
import { AboutMeSlide } from "./(slides)/AboutMeSlide"
import { ReactSlideCraftSlide } from "./(slides)/ReactSlideCraftSlide"
import { TimelineSlide } from "./(slides)/TimelineSlide"
import { EndSlide } from "./(slides)/EndSlide"
import { TodayThemeSlide } from "./(slides)/TitleWithMetaSlide"
import { ResultSlide, ResultSlideNext } from "./(slides)/ResultSlide"
import { Experience1Slide, Experience2Slide } from "./(slides)/ExperlienceSlide"
import { StartExperienceSlide } from "./(slides)/StartExperienceSlide"
import { BrandingSlide } from "./(slides)/BrandingSlide"
import { HowSwitchingSlide } from "./(slides)/SwitchingSlide"
import { HowToChallengeSlide } from "./(slides)/HowToChallengeSlide"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  preload: false,
})

export default function Progate250529Page() {
  const slides = [
    CoverSlide,
    AboutMeSlide,
    ReactSlideCraftSlide,
    TimelineSlide,
    TodayThemeSlide,
    ResultSlide,
    ResultSlideNext,
    StartExperienceSlide,
    Experience1Slide,
    Experience2Slide,
    BrandingSlide,
    HowSwitchingSlide,
    HowToChallengeSlide,
    genSlideObject(EndSlide, { isBaseStyle: true }),
  ]

  return (
    <SlideCore
      slides={slides}
      isShowSlideButtonAlways
      baseSlideFrameStyle={{
        textColor: "#404855",
        backgroundColor: "#ffffff",
        fontFamily: zenMaruGothic.style.fontFamily,
      }}
    />
  )
}
