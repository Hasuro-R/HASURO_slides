"use client"

import { BrandingAnimation } from "@/components/animation/BrandingAnimation"
import { SlideSquareDecoration } from "@/components/slide/decoration/SlideSquareDecoration"
import { useColors } from "@/hooks/useColors"
import { Column, List, Row, SlideBase, Spacer, TitleText } from "react-slide-craft"

export const BrandingSlide = () => {
  const colors = useColors()

  return (
    <SlideBase>
      <Row align="center" padding="4xl 5xl" gap="3xl">
        <div style={{ width: "30%" }}>
          <BrandingAnimation />
        </div>
        <Column width="auto" height="auto" gap="xl">
          <TitleText text="少しの勇気がブランディングに" />
          <Spacer />
          <List
            items={["興味があればまずは飛び込んでみる", "自分から動くと印象に残りやすく、意欲が高いと思ってもらえやすい(かも)"]}
            textStyle={{
              size: "xl",
              weight: "600",
              color: colors("pale", "text"),
            }}
          />
        </Column>
      </Row>
      <SlideSquareDecoration size="50" top="0" right="0" />
    </SlideBase>
  )
}
