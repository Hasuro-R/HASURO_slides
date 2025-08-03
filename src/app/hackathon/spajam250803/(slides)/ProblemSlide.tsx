import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function ProblemSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="3xl" />
        <TitleText text="過去の失敗や恥ずかしい思い出" />
        <Spacer height="xl" />
        <div style={{ textAlign: "center" }}>
          <BoldBodyText text="誰にでもありませんか？" />
          <Spacer height="lg" />
          <div style={{ fontSize: "1.6rem", lineHeight: "1.8" }}>
            <div>💭 学生時代の恥ずかしい告白</div>
            <Spacer height="base" />
            <div>😅 仕事での大きなミス</div>
            <Spacer height="base" />
            <div>🤦‍♂️ SNSでの痛い投稿</div>
          </div>
          <Spacer height="xl" />
          <BoldBodyText text="そんな「黒歴史」を抱えたまま一人で悩んでいませんか？" />
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}