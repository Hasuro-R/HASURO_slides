import { SlideBase, TitleText, SubTitleText, Spacer, Column, CustomText } from "react-slide-craft"

export function CoverSlide() {
  return (
    <SlideBase>
      <Column align="center" crossAlign="center" height="auto">
        <Spacer height="3xl" />
        <TitleText text="KUYOU" />
        <Spacer height="lg" />
        <SubTitleText text="黒歴史を供養するアプリ" />
        <Spacer height="2xl" />
        <Column align="center">
          <CustomText text="SPAJAM 2025/08/03" size="1.2rem" />
          <Spacer height="base" />
          <CustomText text="Team β" size="1.2rem" />
        </Column>
      </Column>
    </SlideBase>
  )
}