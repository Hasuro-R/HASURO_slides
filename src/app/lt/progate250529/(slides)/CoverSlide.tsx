"use client"

import { CoverSlideTemplate, SlideBase } from "react-slide-craft"
import { zenMaruGothic } from "../page"

export const CoverSlide = () => {
  return (
    <SlideBase backgroundColor="#404855" textColor="#ffffff" fontFamily={zenMaruGothic.style.fontFamily}>
      <CoverSlideTemplate
        title="実務経験どうはじめる？？"
        subTitle="Progate LT会"
        subTitleColor="#788c92"
        align="center"
      />
    </SlideBase>
  )
}
