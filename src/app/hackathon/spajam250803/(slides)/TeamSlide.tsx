import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function TeamSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="2xl" />
        
        <TitleText text="チーム紹介" />
        
        <Spacer height="xl" />
        
        <div style={{ textAlign: "center" }}>
          <BoldBodyText text="Team β (ベータ)" />
          
          <Spacer height="lg" />
          
          <div style={{
            backgroundColor: "#eff6ff",
            borderRadius: "20px",
            padding: "40px",
            border: "3px solid #93c5fd",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <div style={{
              fontSize: "1.6rem",
              lineHeight: "2",
              textAlign: "left"
            }}>
              <div style={{marginBottom: "25px"}}>
                <span style={{fontWeight: "bold"}}>🖥️ Backend:</span> Rails API開発・DB設計
              </div>
              <div style={{marginBottom: "25px"}}>
                <span style={{fontWeight: "bold"}}>📱 iOS:</span> SwiftUI アプリ開発・UI/UX設計
              </div>
              <div style={{marginBottom: "25px"}}>
                <span style={{fontWeight: "bold"}}>🎨 Design:</span> コンセプト設計・ビジュアルデザイン
              </div>
              <div>
                <span style={{fontWeight: "bold"}}>📋 PM:</span> プロジェクト管理・発表準備
              </div>
            </div>
          </div>
          
          <Spacer height="lg" />
          
          <BoldBodyText text="黒歴史を供養し、みんなで成長していく世界を目指して" />
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}