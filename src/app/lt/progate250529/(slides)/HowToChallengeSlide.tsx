"use client"

import { useColors } from "@/hooks/useColors"
import { Column, List, Spacer, SubTitleText, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"

export const HowToChallengeSlide = () => {
  const colors = useColors()

  return (
    <TitleWithBgAndBodySlideTemplate
      title="実践したいこと"
      titleColor={colors("light", "text")}
      titleBgColor={colors("dark", "bg")}
    >
      <Column width="auto" crossAlign="center" padding="5xl" gap="2xl">
        <List
          items={[
            "イベントに行って話しかけてみる",
            "実際に連絡できる手段をもらう",
            "/周りの就活している方達は、色んな会社の人とつながっているみたいなので怖い",
            "興味が沸いてきたら、とりあえず動いてみる",
          ]}
          gap="2xl"
          textStyle={{
            size: "xl",
            weight: "600",
            color: colors("pale", "text"),
          }}
        />
        <Spacer height="base" />
        <SubTitleText
          text="できていないこと多すぎるので、自分も頑張ります |🤯|"
          highlightFontSize="*1.2"
        />
      </Column>
    </TitleWithBgAndBodySlideTemplate>
  )
}
