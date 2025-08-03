import { SlideBase, TitleText, BoldBodyText, Container, Spacer, Column, Row, CustomText } from "react-slide-craft"

export function TechStackSlide() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto" width="70%">
        <Spacer height="2xl" />
        
        <TitleText text="技術スタック" />
        
        <Spacer height="2xl" />
        
        <Row gap="60px" width="100%">
          <Column align="center" height="auto">
            <Container
              backgroundColor="#fef2f2"
              cornerRadius={20}
              padding="10px 30px"
              border={{width: 3, style: "solid", color: "#fca5a5"}}
            >
              <Column align="center">
                <CustomText text="🖥️" size="4rem" />
                <Spacer height="sm" />
                <BoldBodyText text="Backend" />
                <Spacer height="sm" />
                <Column align="center" gap="xs">
                  <CustomText text="Rails 7.0.8" size="1.4rem" />
                  <CustomText text="JWT認証" size="1.4rem" />
                  <CustomText text="Docker" size="1.4rem" />
                </Column>
              </Column>
            </Container>
          </Column>
          
          <Column align="center" height="auto">
            <Container
              backgroundColor="#eff6ff"
              cornerRadius={20}
              padding="10px 30px"
              border={{width: 3, style: "solid", color: "#93c5fd"}}
            >
              <Column align="center">
                <CustomText text="📱" size="4rem" />
                <Spacer height="sm" />
                <BoldBodyText text="iOS App" />
                <Spacer height="sm" />
                <Column align="center" gap="xs">
                  <CustomText text="Swift 5.8+" size="1.4rem" />
                  <CustomText text="SwiftUI" size="1.4rem" />
                  <CustomText text="iOS 17.0+" size="1.4rem" />
                </Column>
              </Column>
            </Container>
          </Column>
        </Row>
        
        <Spacer height="xl" />
        
        <Container
          backgroundColor="#f3f4f6"
          padding="30px"
          cornerRadius={15}
          height="auto"
        >
          <Column align="center">
            <BoldBodyText text="📡 RESTful API + Native iOS App" />
            <Spacer height="xs" />
            <CustomText text="シンプルかつ堅牢なアーキテクチャ" size="1.2rem" />
          </Column>
        </Container>
        </Column>
    </SlideBase>
  )
}