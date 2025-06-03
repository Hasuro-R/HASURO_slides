"use client"

import { Column, FloatContainer, Image, List, SectionTitleText, Spacer, TitleText, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"
import CatGifImage from "@/assets/gif/cat_pakupaku.gif"
import { useColors } from "@/hooks/useColors"

export const Experience1Slide = () => {
  const colors = useColors()

  return (
    <TitleWithBgAndBodySlideTemplate title="初インターンに参加したきっかけ" titleColor={colors("light", "text")} titleBgColor={colors("dark", "bg")}>
      <Column width="auto" padding="5xl">
        <SectionTitleText text="きっかけ：ピッチに感動して話しかけに行った" />
        <Spacer height="lg" />
        <List
          items={[
            "起業家プレゼン大会での社長のピッチに感動",
            "↓",
            "大会後、社長に話しかける",
            "↓",
            "その日会場にいた社員さんとお話しし、選考へすすむ",
            "↓",
            "その後社員さんとお話しし、|実務未経験|の高校生ながら初めてのエンジニアインターン生としてジョイン",
          ]}
          gap="0"
          marker="none"
          textStyle={{
            size: "xl",
            weight: "600",
            color: colors("pale", "text"),
          }}
          highlightTextStyle={{
            highlightColor: colors("orange"),
          }}
        />
        <Column height="auto" align="center" crossAlign="center">
          <Spacer height="3xl" />
          <SectionTitleText text="⬇︎⬇︎⬇︎" />
          <Spacer height="xl" />
          <TitleText text="未経験でも、|行動すれば|チャンスはある" highlightColor="var(--color-pink)" />
        </Column>
      </Column>
    </TitleWithBgAndBodySlideTemplate>
  )
}

export const Experience2Slide = () => {
  const colors = useColors()

  return (
    <TitleWithBgAndBodySlideTemplate title="新卒・インターン募集のない会社へ" titleBgColor={colors("dark", "bg")} titleColor={colors("light", "text")}>
      <Column height="auto" padding="5xl 6xl" textColor="var(--text-color-pale)">
        <SectionTitleText text="興味のあるサービスの開発に携わりたい" color="var(--text-color-dark)" />
        <Spacer height="lg" />
        <List
          items={[
            "イベントで交換したYoutrustから社員さんに連絡\n「もしよければ一度お話だけでもしていただけませんか？」",
            "↓",
            "人事の方へお話ししていただき、選考へ",
          ]}
          marker="none"
          textStyle={{
            size: "xl",
            weight: "600",
            color: colors("pale", "text"),
          }}
        />
        <Spacer height="3xl" />
        <TitleText
          text="|運もあるが、|行動がやりたいことへつながる"
          color="var(--text-color-dark)"
          highlightFontSize="*0.9"
        />
      </Column>
      <FloatContainer height="30%" top="38%" right="0">
        <Image src={CatGifImage.src} alt="cat" height="100%" />
      </FloatContainer>
    </TitleWithBgAndBodySlideTemplate>
  )
}
