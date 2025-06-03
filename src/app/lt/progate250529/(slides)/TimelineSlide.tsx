"use client"

import { useColors } from "@/hooks/useColors"
import { Column, List, ListProps, SectionTitleText, Spacer, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"

export const TimelineSlide = () => {
  const colors = useColors()

  const listStyle: ListProps = {
    items: [],
    textStyle: {
      weight: "600",
      size: "xl",
    },
    highlightTextStyle: {
      highlightColor: colors("pink"),
    },
    marker: "none",
  }

  return (
    <TitleWithBgAndBodySlideTemplate title="Timeline" titleColor="var(--text-color-light)" titleBgColor="var(--bg-color-dark)">
      <Column width="auto" padding="4xl" gap="lg">
        <SectionTitleText text="経歴" />
        <List
          {...listStyle}
          items={[
            "24.2~9：株式会社アレスグッド フロント・バックエンドエンジニア",
            "24.6~25.1：株式会社イロリ モバイル・バックエンドエンジニア",
            "25.3：ピクシブ株式会社 エンジニア",
            "25.4~：note株式会社 バックエンドエンジニア |← now|",
          ]}
        />
        <Spacer height="md" />
        <SectionTitleText text="所属" />
        <List
          {...listStyle}
          items={[
            "24.6~：CA Tech Lounge",
            "25.2~：42Tokyo",
          ]}
        />
      </Column>
    </TitleWithBgAndBodySlideTemplate>
  )
}
