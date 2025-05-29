"use client"

import { BoldBodyText, Column, FloatContainer, Image, SectionTitleText, Spacer, TitleText, TitleWithBgAndBodySlideTemplate } from "react-slide-craft"
import CatGifImage from "@/assets/gif/cat_pakupaku.gif"

export const Experience1Slide = () => {
  return (
    <TitleWithBgAndBodySlideTemplate title="初インターンに参加したきっかけ" titleColor="var(--text-color-light)" titleBgColor="var(--bg-color-dark">
      <Column width="auto" padding="5xl" textColor="var(--text-color-pale)">
        <SectionTitleText text="きっかけ：ピッチに感動して話しかけに行った" color="var(--text-color-dark)" />
        <Spacer height="lg" />
        <BoldBodyText text="起業家プレゼン大会での社長のピッチに感動" />
        <BoldBodyText text="↓" />
        <BoldBodyText text="大会後、社長に話しかける" />
        <BoldBodyText text="↓" />
        <BoldBodyText text="その日会場にいた社員さんとお話しし、選考へすすむ" />
        <BoldBodyText text="↓" />
        <BoldBodyText
          text="その後社員さんとお話しし、|実務未経験|の高校生ながら初めてのエンジニアインターン生としてジョイン"
          highlightColor="var(--color-orange)"
        />
        <Column height="auto" align="center" crossAlign="center" textColor="var(--text-color-dark)">
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
  return (
    <TitleWithBgAndBodySlideTemplate title="新卒・インターン募集のない会社へ" titleBgColor="var(--bg-color-dark)" titleColor="var(--text-color-light)">
      <Column height="auto" padding="5xl 6xl" textColor="var(--text-color-pale)">
        <SectionTitleText text="興味のあるサービスの開発に携わりたい" color="var(--text-color-dark)" />
        <Spacer height="lg" />
        <BoldBodyText text="イベントで交換したYoutrustから社員さんに連絡\n「もしよければ一度お話だけでもしていただけませんか？」" />
        <BoldBodyText text="↓" />
        <BoldBodyText text="人事の方へお話ししていただき、選考へ" />
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
