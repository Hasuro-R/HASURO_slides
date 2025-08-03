import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function DemoSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="2xl" />
        
        <TitleText text="デモンストレーション" />
        
        <Spacer height="3xl" />
        
        <div style={{ textAlign: "center" }}>
          <div style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "20px",
            padding: "80px 40px",
            border: "3px dashed #9ca3af"
          }}>
            <div style={{fontSize: "6rem", marginBottom: "30px"}}>📱</div>
            
            <BoldBodyText text="実際のアプリをお見せします" />
            
            <Spacer height="lg" />
            
            <div style={{
              fontSize: "1.6rem",
              lineHeight: "1.8"
            }}>
              <div>✨ 匿名投稿の流れ</div>
              <Spacer height="sm" />
              <div>🙏 供養機能（木魚音付き）</div>
              <Spacer height="sm" />
              <div>💡 アドバイス投稿</div>
              <Spacer height="sm" />
              <div>🏆 ベストアンサー選択</div>
            </div>
          </div>
          
          <Spacer height="xl" />
          
          <BoldBodyText text="ライブデモタイム！" />
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}