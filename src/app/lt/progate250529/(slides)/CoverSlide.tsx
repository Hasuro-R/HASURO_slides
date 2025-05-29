"use client"

import { CoverSlideTemplate, SlideBase } from "react-slide-craft"

export const CoverSlide = () => {
  return (
    <SlideBase backgroundColor="#404855" textColor="#ffffff">
      <CoverSlideTemplate
        title="実務経験どうはじめる？？"
        subTitle="Progate LT会"
        subTitleColor="#788c92"
        align="center"
      />
    </SlideBase>
  )
}
