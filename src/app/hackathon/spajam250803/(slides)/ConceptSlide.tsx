import { BoldBodyText, Spacer, Column, Row, CustomText, TitleAndBodySlideTemplate } from "react-slide-craft"

export function ConceptSlide() {
  return (
    <TitleAndBodySlideTemplate title="KUYOUのコンセプト">
      <Column align="center" crossAlign="center">
      <Spacer height="2xl" />
      <Column align="center" crossAlign="center">
        <BoldBodyText text="黒歴史をリバイバルさせて、みんなで供養し、成仏させる" />
        
        <Spacer height="lg" />
        
        <Row gap="60px" align="center" crossAlign="center" height="auto">
          <Column align="center" height="auto" width="auto">
            <CustomText text="😔" size="3rem" />
            <Spacer height="sm" />
            <CustomText text="黒歴史を\n匿名投稿" size="1.4rem" />
          </Column>
          
          <CustomText text="→" size="3rem" />
          
          <Column align="center" height="auto" width="auto">
            <CustomText text="🙏" size="3rem" />
            <Spacer height="sm" />
            <CustomText text="みんなで\n供養・アドバイス" size="1.4rem" />
          </Column>
          
          <CustomText text="→" size="3rem" />
          
          <Column align="center" height="auto" width="auto">
            <CustomText text="✨" size="3rem" />
            <Spacer height="sm" />
            <CustomText text="成仏して\n成長につなげる" size="1.4rem" />
          </Column>
        </Row>
      </Column>
      </Column>
    </TitleAndBodySlideTemplate>
  )
}