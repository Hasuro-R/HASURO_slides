import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column, Row, FloatContainer, CustomText } from "react-slide-craft"

export function FeaturesSlide3() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto">
        <Spacer height="xl" />
        
        <TitleText text="💡 智慧の泉" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="建設的なアドバイスを投稿する場所" />
        
        <Spacer height="lg" />
        
        <Row gap="80px" width="auto">
          <Column>
            <List
              items={[
                "💭 改善案・アドバイス投稿",
                "🔄 「こうすれば良かった」提案",
                "⭐ 投稿で5ポイント獲得",
                "🤝 建設的なコミュニティ形成"
              ]}
            />
            
            <Spacer height="2xl" />
            
            <Container
              height="auto"
              backgroundColor="#f0fdf4"
              padding="20px"
              cornerRadius={10}
              border={{width: 2, style: "solid", color: "#86efac"}}
            >
              <BoldBodyText text="「失敗」を「学び」に変える知恵を共有" />
            </Container>
          </Column>
          
          <Column align="center">
            <Container
              backgroundColor="#dcfce7"
              padding="30px"
              cornerRadius={15}
            >
              <Column align="center" height="auto">
                <CustomText text="💡" size="3rem" />
                <Spacer height="sm" />
                <CustomText 
                  text="「その時はこう言えば\n良かったかも」\n\n「次回は〇〇を\n試してみては？」" 
                  size="1.2rem" 
                />
              </Column>
            </Container>
            
            <Spacer height="sm" />
            
            <CustomText 
              text="批判ではなく、\n前向きなアドバイス" 
              size="1.1rem" 
            />
          </Column>
        </Row>
        </Column>
    </SlideBase>
  )
}