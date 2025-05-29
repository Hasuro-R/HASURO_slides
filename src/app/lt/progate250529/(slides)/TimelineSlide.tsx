"use client"

import { BoldBodyText, Column, SectionTitleText, Spacer, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"

export const TimelineSlide = () => {
  return (
    <TitleWithBgAndBodySlideTemplate title="Timeline" titleColor="var(--text-color-light)" titleBgColor="var(--bg-color-dark)">
      <Column width="auto" padding="4xl" gap="lg">
        <SectionTitleText text="経歴" />
        <BoldBodyText text="24.2~9：株式会社アレスグッド フロント・バックエンドエンジニア" />
        <BoldBodyText text="24.6~25.1：株式会社イロリ モバイル・バックエンドエンジニア" />
        <BoldBodyText text="25.3：ピクシブ株式会社 エンジニア" />
        <BoldBodyText text="25.4~：note株式会社 バックエンドエンジニア |← now|" highlightColor="var(--color-pink)" />
        <Spacer height="md" />
        <SectionTitleText text="所属" />
        <BoldBodyText text="24.6~：CA Tech Lounge" />
        <BoldBodyText text="25.2~：42Tokyo" />
      </Column>
    </TitleWithBgAndBodySlideTemplate>
  )
}
