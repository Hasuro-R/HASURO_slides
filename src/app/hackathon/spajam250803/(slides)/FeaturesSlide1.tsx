import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column } from "react-slide-craft"

export function FeaturesSlide1() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="xl" />
        
        <TitleText text="📝 懺悔の間" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="匿名で黒歴史を投稿する場所" />
        
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
                "🔒 完全匿名投稿",
                "🎭 自動生成ニックネーム",
                "📂 カテゴリ分類",
                "💰 投稿で10ポイント獲得"
              ]}
            />
            
            <Spacer height="lg" />
            
            <div style={{
              backgroundColor: "#fef2f2",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #fca5a5"
            }}>
              <BoldBodyText text="「過去を消したい」から「みんなと共有したい」へ" />
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            textAlign: "center",
            backgroundColor: "#f3f4f6",
            padding: "40px",
            borderRadius: "15px"
          }}>
            <div style={{fontSize: "4rem", marginBottom: "20px"}}>📱</div>
            <div style={{
              fontSize: "1.2rem",
              fontStyle: "italic"
            }}>
              スマートフォン画面<br />
              イメージ
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}