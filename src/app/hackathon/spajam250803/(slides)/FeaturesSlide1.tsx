import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column, Row, FloatContainer, CustomText } from "react-slide-craft"

export function FeaturesSlide1() {
  return (
    <SlideBase>
      <Column align="center" crossAlign="center" height="auto">
      <Spacer height="xl" />
      
      <TitleText text="📝 懺悔の間" />
      
      <Spacer height="lg" />
      
      <BoldBodyText text="匿名で黒歴史を投稿する場所" />
      
      <Spacer height="2xl" />
      
      <Row gap="80px" width="auto">
        <Column>
          <List
            items={[
              "🔒 完全匿名投稿",
              "🎭 自動生成ニックネーム",
              "📂 カテゴリ分類",
              "💰 投稿で10ポイント獲得"
            ]}
          />
          
          <Spacer height="lg" />
          
          <Container
            backgroundColor="#fef2f2"
            padding="10px 20px"
            cornerRadius={10}
            border={{width: 2, style: "solid", color: "#fca5a5"}}
          >
            <BoldBodyText text="「過去を消したい」から「みんなと共有したい」へ" />
          </Container>
        </Column>
        
        <Column align="center">
          <Container
            backgroundColor="#f3f4f6"
            padding="40px"
            cornerRadius={15}
          >
            <Column align="center">
              <CustomText text="📱" size="4rem" />
              <Spacer height="sm" />
              <CustomText 
                text="スマートフォン画面\nイメージ" 
                size="1.2rem" 
              />
            </Column>
          </Container>
        </Column>
      </Row>
      </Column>
    </SlideBase>
  )
}