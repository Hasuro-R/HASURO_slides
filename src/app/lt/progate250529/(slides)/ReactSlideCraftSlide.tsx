import { Column, CustomText, Image, List, Row, SectionTitleText, SlideBase, Spacer, TitleText } from "react-slide-craft"
import QRImage from "@/assets/rsc_qr.webp"
import { useColors } from "@/hooks/useColors"

export const ReactSlideCraftSlide = () => {
  const colors = useColors()

  return (
    <SlideBase>
      <Row align="center" crossAlign="center">
        <Column
          width="70%"
          crossAlign="center"
          padding="3xl"
        >
          <TitleText text="Reactで簡単に|スライド|を実装" highlightColor="#ea5e7f" />
          <SectionTitleText text="ReactのUIコンポーネントライブラリ" highlightColor="#ea5e7f" />
          <Spacer height="4xl" />
          <List
            items={[
              "スライドの配列を渡すだけでスライドを作成できる仕組みを提供",
              "|矢印キー| & |ボタン|でのスライド切り替え",
              "どんな表示サイズでも|比率を変えずに|表示が可能",
              "｜で囲んだ文字列をテキストコンポーネントに渡すと、指定のスタイルで|強調|",
            ]}
            textStyle={{
              size: "xl",
              weight: "600",
              color: colors("pale", "text"),
            }}
            highlightTextStyle={{
              highlightColor: colors("orange"),
            }}
          />
          <Spacer height="4xl" />
          <SectionTitleText text="リポジトリに|Star|もらえると嬉しすぎます⭐️" highlightColor="#ea5e7f" />
        </Column>
        <Column
          width="30%"
          align="center"
          crossAlign="center"
          padding="3xl"
          textColor="#ffffff"
          backgroundColor="#404855"
        >
          <a href="https://github.com/Hasuro-R/react-slide-craft" target="_blank" style={{ width: "80%" }}>
            <Image src={QRImage.src} alt="rsc QR" width="100%" />
          </a>
          <CustomText text="React |Slide| Craft" size="5xl" weight="700" style={{ textAlign: "center" }} highlightColor="#f0864b" />
        </Column>
      </Row>
    </SlideBase>
  )
}
