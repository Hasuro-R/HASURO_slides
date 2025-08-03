import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column, FloatContainer, CustomText } from "react-slide-craft"

export function TeamSlide() {
  return (
    <SlideBase>
      <Column align="center" crossAlign="center" height="auto">
        <Spacer height="2xl" />
        <TitleText text="チーム紹介" />
        <Spacer height="sm" />
        <Column align="center">
          <BoldBodyText text="Team β (ベータ)" />
          <Spacer height="3xl" />
          <Container
            width="auto"
            backgroundColor="#eff6ff"
            cornerRadius={20}
            padding="40px"
            border={{width: 3, style: "solid", color: "#93c5fd"}}
          >
            <Column gap="lg">
              <CustomText text="🦓 井上蓮太郎：アイデア出し・実装・スライド作成" size="1.6rem" />
              <CustomText text="🐢 伊藤汰海：実装・スライド作成" size="1.6rem" />
              <CustomText text="🐰 細沼咲希：アイデア出し・実装" size="1.6rem" />
              <CustomText text="🎨 大澤清乃：デザイン監修" size="1.6rem" />
            </Column>
          </Container>
        </Column>
      </Column>
    </SlideBase>
  )
}