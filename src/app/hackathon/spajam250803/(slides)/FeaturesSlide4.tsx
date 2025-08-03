import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column, Row, CustomText } from "react-slide-craft"

export function FeaturesSlide4() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto">
        <Spacer height="xl" />
        
        <TitleText text="✨ 成仏の儀" />
        
        <Spacer height="2xl" />
        
        <BoldBodyText text="ベストアンサーを選んで黒歴史を成仏させる" />
        
        <Spacer height="lg" />
        
        <Row gap="80px" width="auto">
          <Column>
            <List
              items={[
                "🏆 投稿者がベストアンサー選択",
                "⭐ 投稿者: 50ポイント獲得",
                "🎉 回答者: 30ポイント獲得",
                "🕊️ 黒歴史が「成仏」状態に"
              ]}
            />
            
            <Spacer height="lg" />
            
            <Container
              backgroundColor="#faf5ff"
              padding="20px"
              cornerRadius={10}
              border={{width: 2, style: "solid", color: "#c4b5fd"}}
            >
              <BoldBodyText text="過去の自分を受け入れ、新しい自分へと成長" />
            </Container>
          </Column>
          
          <Column align="center">
            <Container
              backgroundColor="#f3e8ff"
              padding="40px"
              cornerRadius={20}
              border={{width: 3, style: "solid", color: "#c4b5fd"}}
            >
              <Column align="center">
                <CustomText text="🕊️✨" size="4rem" />
                <Spacer height="sm" />
                <BoldBodyText text="成仏完了" />
                <Spacer height="xs" />
                <CustomText 
                  text="黒歴史から学びへ" 
                  size="1.1rem" 
                />
              </Column>
            </Container>
          </Column>
        </Row>
        </Column>
    </SlideBase>
  )
}