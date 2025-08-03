import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column, Row, FloatContainer, CustomText } from "react-slide-craft"

export function FeaturesSlide2() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto">
        <Spacer height="xl" />
        
        <TitleText text="🙏 供養広場" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="みんなの黒歴史を見て供養する場所" />
        
        <Spacer height="lg" />
        
        <Row gap="80px" width="auto">
          <Column>
            <List
              items={[
                "📋 タイムライン形式で閲覧",
                "🥢 木魚アイコンで「供養」",
                "🔍 カテゴリフィルタリング",
                "⭐ 供養されると1ポイント獲得"
              ]}
            />
            
            <Spacer height="2xl" />
            
            <Container
              height="auto"
              backgroundColor="#eff6ff"
              padding="20px"
              cornerRadius={10}
              border={{width: 2, style: "solid", color: "#93c5fd"}}
            >
              <BoldBodyText text="木魚の音とともに心を込めて供養" />
            </Container>
          </Column>
          
          <Column align="center">
            <Container
              backgroundColor="#dbeafe"
              padding="40px"
              cornerRadius={15}
            >
              <Column align="center" height="auto">
                <CustomText text="🥢" size="6rem" />
                <Spacer height="sm" />
                <BoldBodyText text="木魚アイコン" />
              </Column>
            </Container>
            
            <Spacer height="lg" />
            
            <CustomText 
              text="タップすると\n木魚の音が鳴ります" 
              size="1.2rem" 
            />
          </Column>
        </Row>
        </Column>
    </SlideBase>
  )
}