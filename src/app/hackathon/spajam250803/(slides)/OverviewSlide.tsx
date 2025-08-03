import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column } from "react-slide-craft"

export function OverviewSlide() {
  return (
    <SlideBase>
      <Container>
        <Column align="center" crossAlign="center">
        <Spacer height="xl" />
        
        <TitleText text="アプリの全体フロー" />
        
        <Spacer height="2xl" />
        
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "#fef2f2",
              borderRadius: "20px",
              padding: "30px",
              border: "3px solid #fca5a5"
            }}>
              <div style={{fontSize: "3rem", marginBottom: "15px"}}>📝</div>
              <BoldBodyText text="懺悔の間" />
              <div style={{fontSize: "1.2rem", marginTop: "10px"}}>
                匿名で黒歴史を投稿
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "#eff6ff",
              borderRadius: "20px",
              padding: "30px",
              border: "3px solid #93c5fd"
            }}>
              <div style={{fontSize: "3rem", marginBottom: "15px"}}>🙏</div>
              <BoldBodyText text="供養広場" />
              <div style={{fontSize: "1.2rem", marginTop: "10px"}}>
                木魚でいいね・供養
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "#f0fdf4",
              borderRadius: "20px",
              padding: "30px",
              border: "3px solid #86efac"
            }}>
              <div style={{fontSize: "3rem", marginBottom: "15px"}}>💡</div>
              <BoldBodyText text="智慧の泉" />
              <div style={{fontSize: "1.2rem", marginTop: "10px"}}>
                アドバイス・改善案
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "#faf5ff",
              borderRadius: "20px",
              padding: "30px",
              border: "3px solid #c4b5fd"
            }}>
              <div style={{fontSize: "3rem", marginBottom: "15px"}}>✨</div>
              <BoldBodyText text="成仏の儀" />
              <div style={{fontSize: "1.2rem", marginTop: "10px"}}>
                ベストアンサー選択
              </div>
            </div>
          </div>
        </div>
        </Column>
      </Container>
    </SlideBase>
  )
}