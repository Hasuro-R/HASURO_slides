import { BoldBodyText, Column, CustomText, Row, SlideBase, Spacer, SubTitleText, TitleText, Image as SlideImage, Container } from "react-slide-craft"
import Image from "next/image"
import Icon from "@/assets/hasuro_icon.png"
import TechStackImage from "@/assets/tech_stack.png"

export const AboutMeSlide = () => {
  return (
    <SlideBase
      backgroundColor="#ffffff"
    >
      <Row
        align="center"
        crossAlign="start"
      >
        <Column
          width="30%"
          align="center"
          crossAlign="center"
          textColor="#ffffff"
          backgroundColor="#404855"
        >
          <Container
            width="75%"
            height="auto"
            cornerRadius={1000}
            border={{
              width: 4,
              color: "#ffffff",
              style: "solid",
            }}
            containerStyle={{ aspectRatio: "1/1" }}
          >
            <Image src={Icon} alt="icon" width={300} className="w-full h-auto rounded-full" />
          </Container>
          <Spacer height="25" />
          <TitleText text="HASURO" />
          <CustomText text="はすろー" weight="600" color="#788c92" />
        </Column>
        <Column
          width="70%"
          crossAlign="center"
          padding="3xl"
          textColor="#404855"
        >
          <Row
            height="auto"
            align="end"
          >
            <SubTitleText text="AboutMe" style={{ lineHeight: 0.75 }} />
            <Spacer width="10" />
            <Container height="0" cornerRadius={1000} border={{ width: 0.5, color: "#404855" }} />
          </Row>
          <Spacer height="3xl" />
          <Column
            height="auto"
            gap="8"
            textColor="#788c92"
          >
            <BoldBodyText text="19歳の自由人" />
            <BoldBodyText text="【趣味】" />
            <BoldBodyText text="・🐟を市場で仕入れてさばく、お菓子🍰作り" />
            <BoldBodyText text="・スキューバダイビング🤿" />
            <BoldBodyText text="・アプリ開発" />
            <Spacer height="10" />
            <BoldBodyText text="【最近のエピソード】" />
            <BoldBodyText text="・タコパがしたいお年頃" />
            <BoldBodyText text="・|React Slide Craft|というReactのライブラリをリリース" highlightColor="#404855" />
            <Spacer height="10" />
            <BoldBodyText text="【技術スタック】" />
            <Row>
              <Spacer width="10" />
              <SlideImage src={TechStackImage.src} alt="tech stack" height="75" />
            </Row>
          </Column>
        </Column>
      </Row>
    </SlideBase>
  )
}
