"use client"

import Lottie from "lottie-react"
import { AnimationContainer } from "./AnimationContainer"
import AnimationData from "@/assets/animation/branding.json"

export const BrandingAnimation = () => {
  return (
    <AnimationContainer>
      <Lottie
        animationData={AnimationData}
        autoplay
      />
    </AnimationContainer>
  )
}
