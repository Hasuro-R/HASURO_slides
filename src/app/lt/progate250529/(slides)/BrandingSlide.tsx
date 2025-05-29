"use client"

import { BrandingAnimation } from "@/components/animation/BrandingAnimation"
import { SlideSquareDecoration } from "@/components/slide/decoration/SlideSquareDecoration"
import { BoldBodyText, Column, Row, SlideBase, Spacer, TitleText } from "react-slide-craft"

export const BrandingSlide = () => {
  return (
    <SlideBase>
      <Row align="center" padding="4xl 5xl" gap="3xl">
        <div style={{ width: "30%" }}>
          <BrandingAnimation />
        </div>
        <Column width="auto" height="auto" textColor="var(--text-color-pale)" gap="xl">
          <TitleText text="少しの勇気がブランディングに" color="var(--text-color-dark)" />
          <Spacer />
          <BoldBodyText text="・興味があればまずは飛び込んでみる" />
          <BoldBodyText text="・自分から動くと印象に残りやすく、意欲が高いと思ってもらえやすい(かも)" />
        </Column>
      </Row>
      <SlideSquareDecoration size="50" top="0" right="0" />
    </SlideBase>
  )
}
