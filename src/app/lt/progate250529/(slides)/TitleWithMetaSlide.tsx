"use client"

import { BodyText, Column, FloatContainer, HeadlineText, SlideBase, Spacer, SubTitleText } from "react-slide-craft"

const TitleWithMetaSlideBase = ({ children } : { children: React.ReactNode }) => {
  return (
    <SlideBase textColor="var(--text-color-light)" backgroundColor="var(--bg-color-dark)">
      {children}
      <Spacer height="2xl" />
    </SlideBase>
  )
}

export const TodayThemeSlide = () => {
  return (
    <TitleWithMetaSlideBase>
      <Column align="center" crossAlign="center" gap="base">
        <SubTitleText text="今日のテーマは" />
        <HeadlineText text="実務経験どうはじめる？" />
      </Column>
      <FloatContainer bottom="xl" right="xl">
        <BodyText text="ということで..." weight="600" />
      </FloatContainer>
    </TitleWithMetaSlideBase>
  )
}
