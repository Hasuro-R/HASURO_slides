import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function TechStackSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="2xl" />
        
        <TitleText text="技術スタック" />
        
        <Spacer height="2xl" />
        
        <div style={{ 
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          gap: "60px"
        }}>
          <div style={{ 
            flex: 1,
            textAlign: "center"
          }}>
            <div style={{
              backgroundColor: "#fef2f2",
              borderRadius: "20px",
              padding: "40px",
              border: "3px solid #fca5a5"
            }}>
              <div style={{fontSize: "4rem", marginBottom: "20px"}}>🖥️</div>
              <BoldBodyText text="Backend" />
              <div style={{
                fontSize: "1.4rem",
                lineHeight: "1.8",
                marginTop: "20px"
              }}>
                <div>Ruby 3.2.2</div>
                <div>Rails 7.0.8</div>
                <div>MySQL 8.0</div>
                <div>JWT認証</div>
                <div>Docker</div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            textAlign: "center"
          }}>
            <div style={{
              backgroundColor: "#eff6ff",
              borderRadius: "20px",
              padding: "40px",
              border: "3px solid #93c5fd"
            }}>
              <div style={{fontSize: "4rem", marginBottom: "20px"}}>📱</div>
              <BoldBodyText text="iOS App" />
              <div style={{
                fontSize: "1.4rem",
                lineHeight: "1.8",
                marginTop: "20px"
              }}>
                <div>Swift 5.8+</div>
                <div>SwiftUI</div>
                <div>iOS 17.0+</div>
                <div>URLSession</div>
                <div>Combine</div>
              </div>
            </div>
          </div>
        </div>
        
        <Spacer height="xl" />
        
        <div style={{
          textAlign: "center",
          backgroundColor: "#f3f4f6",
          padding: "30px",
          borderRadius: "15px"
        }}>
          <BoldBodyText text="📡 RESTful API + Native iOS App" />
          <div style={{
            fontSize: "1.2rem",
            marginTop: "10px"
          }}>
            シンプルかつ堅牢なアーキテクチャ
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}