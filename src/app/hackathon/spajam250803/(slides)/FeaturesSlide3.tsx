import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column } from "react-slide-craft"

export function FeaturesSlide3() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="xl" />
        
        <TitleText text="💡 智慧の泉" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="建設的なアドバイスを投稿する場所" />
        
        <Spacer height="lg" />
        
        <div style={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "80px"
        }}>
          <div style={{ flex: 1 }}>
            <List
              items={[
                "💭 改善案・アドバイス投稿",
                "🔄 「こうすれば良かった」提案",
                "⭐ 投稿で5ポイント獲得",
                "🤝 建設的なコミュニティ形成"
              ]}
            />
            
            <Spacer height="lg" />
            
            <div style={{
              backgroundColor: "#f0fdf4",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #86efac"
            }}>
              <BoldBodyText text="「失敗」を「学び」に変える知恵を共有" />
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            textAlign: "center"
          }}>
            <div style={{
              backgroundColor: "#dcfce7",
              padding: "30px",
              borderRadius: "15px",
              marginBottom: "20px"
            }}>
              <div style={{fontSize: "3rem", marginBottom: "15px"}}>💡</div>
              <div style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                lineHeight: "1.6"
              }}>
                「その時はこう言えば<br />
                良かったかも」<br />
                <br />
                「次回は〇〇を<br />
                試してみては？」
              </div>
            </div>
            
            <div style={{
              fontSize: "1.1rem",
              fontStyle: "italic"
            }}>
              批判ではなく、<br />
              前向きなアドバイス
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}