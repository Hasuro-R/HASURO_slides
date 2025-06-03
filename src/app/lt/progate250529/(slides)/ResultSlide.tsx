"use client"

import { SlideSquareDecoration } from "@/components/slide/decoration/SlideSquareDecoration"
import { useColors } from "@/hooks/useColors"
import { Column, CustomText, FloatContainer, SectionTitleText, SlideBase, Spacer, TitleText } from "react-slide-craft"

export const ResultSlideBase = ({ children } : { children?: React.ReactNode }) => {
  const colors = useColors()

  return (
    <SlideBase>
      <Column align="center" crossAlign="center">
        <Column width="auto" height="auto" gap="base">
          <SectionTitleText text="結論：" />
          <CustomText size="5xl" weight="700" text="インターンは|行動力|で始まる" highlightColor={colors("pink")} highlightFontSize="*1.05" />
        </Column>
        <Spacer height="3xl" />
      </Column>
      <SlideSquareDecoration size="50" top="0" right="0" />
      {/* <SlideSquareDeco size="65" bottom="0" left="0" /> */}
      {children}
    </SlideBase>
  )
}

export const ResultSlide = () => {
  return (
    <ResultSlideBase />
  )
}

export const ResultSlideNext = () => {
  return (
    <ResultSlideBase>
      <FloatContainer
        width="100%"
        height="100%"
        containerStyle={{ backdropFilter: "blur(12px)" }}
      >
        <TitleText text="当たり前ですやん |🧐|" highlightFontSize="*1.2" />
      </FloatContainer>
    </ResultSlideBase>
  )
}
