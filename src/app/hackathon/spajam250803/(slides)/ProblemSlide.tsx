import { BoldBodyText, Spacer, Column, CustomText, TitleAndBodySlideTemplate } from "react-slide-craft"

export function ProblemSlide() {
  return (
    <TitleAndBodySlideTemplate title="過去の失敗や恥ずかしい思い出">
      <Column align="center" crossAlign="center" height="auto">
        <Spacer height="3xl" />
        <Column align="center">
          <BoldBodyText text="誰にでもありませんか？" />
          <Spacer height="lg" />
          <Column align="center" gap="base">
            <CustomText text="💭 学生時代の恥ずかしい告白" size="1.6rem" />
            <CustomText text="😅 仕事での大きなミス" size="1.6rem" />
            <CustomText text="🤦‍♂️ SNSでの痛い投稿" size="1.6rem" />
          </Column>
          <Spacer height="xl" />
          <BoldBodyText text="そんな「黒歴史」を抱えたまま一人で悩んでいませんか？" />
        </Column>
      </Column>
    </TitleAndBodySlideTemplate>
  )
}