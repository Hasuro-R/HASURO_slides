"use client"

import { BoldBodyText, Column, Spacer, SubTitleText, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"

export const HowToChallengeSlide = () => {
  return (
    <TitleWithBgAndBodySlideTemplate
      title="実践したいこと"
      titleColor="var(--text-color-light)"
      titleBgColor="var(--bg-color-dark)"
    >
      <Column width="auto" crossAlign="center" padding="5xl" gap="2xl" textColor="var(--text-color-pale)">
        <BoldBodyText text="・イベントに行って話しかけてみる" />
        <BoldBodyText text="・実際に連絡できる手段をもらう" />
        <BoldBodyText text="→ 周りの就活している方達は、色んな会社の人とつながっているみたいなので怖い" />
        <BoldBodyText text="・興味が沸いてきたら、とりあえず動いてみる" />
        <Spacer height="base" />
        <SubTitleText
          text="できていないこと多すぎるので、自分も頑張ります |🤯|"
          color="var(--text-color-dark)"
          highlightFontSize="*1.2"
        />
      </Column>
    </TitleWithBgAndBodySlideTemplate>
  )
}
