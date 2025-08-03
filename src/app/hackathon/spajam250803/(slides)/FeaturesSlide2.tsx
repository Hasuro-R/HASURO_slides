import { SlideBase, TitleText, BoldBodyText, Container, Spacer, List, Column } from "react-slide-craft"

export function FeaturesSlide2() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="xl" />
        
        <TitleText text="🙏 供養広場" />
        
        <Spacer height="lg" />
        
        <BoldBodyText text="みんなの黒歴史を見て供養する場所" />
        
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
                "📋 タイムライン形式で閲覧",
                "🥢 木魚アイコンで「供養」",
                "🔍 カテゴリフィルタリング",
                "⭐ 供養されると1ポイント獲得"
              ]}
            />
            
            <Spacer height="lg" />
            
            <div style={{
              backgroundColor: "#eff6ff",
              padding: "20px",
              borderRadius: "10px",
              border: "2px solid #93c5fd"
            }}>
              <BoldBodyText text="木魚の音とともに心を込めて供養" />
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            textAlign: "center"
          }}>
            <div style={{
              backgroundColor: "#dbeafe",
              padding: "40px",
              borderRadius: "15px",
              marginBottom: "30px"
            }}>
              <div style={{fontSize: "6rem", marginBottom: "10px"}}>🥢</div>
              <BoldBodyText text="木魚アイコン" />
            </div>
            
            <div style={{
              fontSize: "1.2rem",
              fontStyle: "italic"
            }}>
              タップすると<br />
              木魚の音が鳴ります
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}