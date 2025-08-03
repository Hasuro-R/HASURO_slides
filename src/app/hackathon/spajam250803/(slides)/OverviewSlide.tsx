import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column, Row, FloatContainer, CustomText } from "react-slide-craft"

export function OverviewSlide() {
  return (
    <SlideBase>
      <Column align="center" crossAlign="center">
      <Spacer height="xl" />
      
      <TitleText text="アプリの全体フロー" />
      
      <Spacer height="2xl" />
      
      <Column gap="60px">
        <Row gap="60px">
          <Column align="center">
            <FloatContainer
              backgroundColor="#fef2f2"
              cornerRadius={20}
              padding="30px"
              border={{width: 3, style: "solid", color: "#fca5a5"}}
            >
              <Column align="center">
                <CustomText text="📝" size="3rem" />
                <Spacer height="sm" />
                <BoldBodyText text="懺悔の間" />
                <Spacer height="xs" />
                <CustomText text="匿名で黒歴史を投稿" size="1.2rem" />
              </Column>
            </FloatContainer>
          </Column>
          
          <Column align="center">
            <FloatContainer
              backgroundColor="#eff6ff"
              cornerRadius={20}
              padding="30px"
              border={{width: 3, style: "solid", color: "#93c5fd"}}
            >
              <Column align="center">
                <CustomText text="🙏" size="3rem" />
                <Spacer height="sm" />
                <BoldBodyText text="供養広場" />
                <Spacer height="xs" />
                <CustomText text="木魚でいいね・供養" size="1.2rem" />
              </Column>
            </FloatContainer>
          </Column>
        </Row>
        
        <Row gap="60px">
          <Column align="center">
            <FloatContainer
              backgroundColor="#f0fdf4"
              cornerRadius={20}
              padding="30px"
              border={{width: 3, style: "solid", color: "#86efac"}}
            >
              <Column align="center">
                <CustomText text="💡" size="3rem" />
                <Spacer height="sm" />
                <BoldBodyText text="智慧の泉" />
                <Spacer height="xs" />
                <CustomText text="アドバイス・改善案" size="1.2rem" />
              </Column>
            </FloatContainer>
          </Column>
          
          <Column align="center">
            <FloatContainer
              backgroundColor="#faf5ff"
              cornerRadius={20}
              padding="30px"
              border={{width: 3, style: "solid", color: "#c4b5fd"}}
            >
              <Column align="center">
                <CustomText text="✨" size="3rem" />
                <Spacer height="sm" />
                <BoldBodyText text="成仏の儀" />
                <Spacer height="xs" />
                <CustomText text="ベストアンサー選択" size="1.2rem" />
              </Column>
            </FloatContainer>
          </Column>
        </Row>
      </Column>
      </Column>
    </SlideBase>
  )
}