import { SlideBase, TitleText, SubTitleText, Container, Spacer, Column } from "react-slide-craft"

export function CoverSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="3xl" />
        <TitleText text="KUYOU" />
        <Spacer height="lg" />
        <SubTitleText text="黒歴史を供養するアプリ" />
        <Spacer height="2xl" />
        <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
          <div>SPAJAM 2025/08/03</div>
          <Spacer height="base" />
          <div>Team β</div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}