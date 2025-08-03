import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function ConceptSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="2xl" />
        <TitleText text="KUYOUのコンセプト" />
        
        <Spacer height="2xl" />
        
        <div style={{ textAlign: "center" }}>
          <BoldBodyText text="黒歴史をリバイバルさせて、みんなで供養し、成仏させる" />
          
          <Spacer height="lg" />
          
          <div style={{ 
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            fontSize: "1.4rem"
          }}>
            <div>
              <div style={{fontSize: "3rem", marginBottom: "20px"}}>😔</div>
              <div>黒歴史を<br />匿名投稿</div>
            </div>
            
            <div style={{fontSize: "3rem", alignSelf: "center"}}>→</div>
            
            <div>
              <div style={{fontSize: "3rem", marginBottom: "20px"}}>🙏</div>
              <div>みんなで<br />供養・アドバイス</div>
            </div>
            
            <div style={{fontSize: "3rem", alignSelf: "center"}}>→</div>
            
            <div>
              <div style={{fontSize: "3rem", marginBottom: "20px"}}>✨</div>
              <div>成仏して<br />成長につなげる</div>
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}