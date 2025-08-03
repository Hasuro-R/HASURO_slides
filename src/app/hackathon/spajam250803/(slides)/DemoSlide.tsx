import { SlideBase, TitleText, Spacer, Column } from "react-slide-craft"

export function DemoSlide() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto">
        <Spacer height="2xl" />
        
        <TitleText text="デモンストレーション" />
        
        <Spacer height="3xl" />
        </Column>
    </SlideBase>
  )
}