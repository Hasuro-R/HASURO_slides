"use client"

import { BoldBodyText, Column, Container, CustomText, Image as SlideImage, List, ListProps, Row, SlideBase, Spacer, SubTitleText, TitleText } from "react-slide-craft"
import Image from "next/image"
import Icon from "@/assets/hasuro_icon.png"
import { useColors } from "@/hooks/useColors"

export const AboutMeSlideTemplate = ({
  descriptions,
  recentStories,
  techStackImage,
} : {
  descriptions: string[]
  recentStories: string[]
  techStackImage: string
}) => {
  const colors = useColors()

  const listStyle: ListProps = {
    items: [],
    gap: "8",
    marker: "none",
    textStyle: {
      color: colors("pale", "text"),
      size: "xl",
      weight: "600",
    },
    highlightTextStyle: {
      highlightColor: colors("dark", "text"),
    }
  }

  return (
    <SlideBase
      backgroundColor={colors("light", "bg")}
    >
      <Row
        align="center"
        crossAlign="start"
      >
        <Column
          width="30%"
          align="center"
          crossAlign="center"
          textColor={colors("light", "text")}
          backgroundColor={colors("dark", "bg")}
        >
          <Container
            width="75%"
            height="auto"
            cornerRadius={1000}
            border={{
              width: 4,
              color: colors("white"),
              style: "solid",
            }}
            containerStyle={{ aspectRatio: "1/1" }}
          >
            <Image src={Icon} alt="icon" width={300} className="w-full h-auto rounded-full" />
          </Container>
          <Spacer height="25" />
          <TitleText text="HASURO" />
          <CustomText text="はすろー" weight="600" color={colors("pale-gray")} />
        </Column>
        <Column
          width="70%"
          crossAlign="center"
          padding="3xl"
          textColor={colors("dark", "text")}
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
            textColor={colors("pale", "text")}
          >
            <List
              {...listStyle}
              items={descriptions}
            />
            <Spacer height="10" />
            <List
              {...listStyle}
              items={[
                "【最近のエピソード】",
                ...recentStories,
              ]}
            />
            <Spacer height="10" />
            <BoldBodyText text="【技術スタック】" />
            <Row>
              <Spacer width="10" />
              <SlideImage src={techStackImage} alt="tech stack" height="75" />
            </Row>
          </Column>
        </Column>
      </Row>
    </SlideBase>
  )
}
