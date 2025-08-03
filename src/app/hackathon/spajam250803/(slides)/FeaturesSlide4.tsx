import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column } from "react-slide-craft"

export function FeaturesSlide4() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="xl" />
        
        <TitleText text="✨ 成仏の儀" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="ベストアンサーを選んで黒歴史を成仏させる" />
        
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
                "🏆 投稿者がベストアンサー選択",
                "⭐ 投稿者: 50ポイント獲得",
                "🎉 回答者: 30ポイント獲得",
                "🕊️ 黒歴史が「成仏」状態に"
              ]}
            />
            
            <Spacer height="lg" />
            
            <div style={{
              backgroundColor: "#faf5ff",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #c4b5fd"
            }}>
              <BoldBodyText text="過去の自分を受け入れ、新しい自分へと成長" />
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            textAlign: "center"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
              padding: "40px",
              borderRadius: "20px",
              border: "3px solid #c4b5fd"
            }}>
              <div style={{
                fontSize: "4rem", 
                marginBottom: "20px"
              }}>
                🕊️✨
              </div>
              <BoldBodyText text="成仏完了" />
              <div style={{
                fontSize: "1.1rem",
                marginTop: "10px",
                fontStyle: "italic"
              }}>
                黒歴史から学びへ
              </div>
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}