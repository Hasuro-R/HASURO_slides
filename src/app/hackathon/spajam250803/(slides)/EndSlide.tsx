import { SlideBase, Spacer, Column, CustomText } from "react-slide-craft"

export function EndSlide() {
  return (
    <SlideBase>
        <Column align="center" crossAlign="center" height="auto">
        <Spacer height="2xl" />
        
        <CustomText text="END" size="8xl" />
        
        <Spacer height="3xl" />
        </Column>
    </SlideBase>
  )
}
