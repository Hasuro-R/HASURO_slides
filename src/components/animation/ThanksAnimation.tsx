"use client"

import Lottie from "lottie-react"
import { AnimationContainer } from "./AnimationContainer"
import animationData from "@/assets/animation/thanks.json"

export const ThanksAnimation = () => {
  return (
    <AnimationContainer>
      <Lottie
        animationData={animationData}
        autoplay
      />
    </AnimationContainer>
  )
}
