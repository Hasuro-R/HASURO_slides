"use client"

import { AboutMeSlideTemplate } from "@/app/components/common/slides/templates/AboutMeSlideTemplate"
import TechStackImage from "@/assets/tech_stack.png"

export const AboutMeSlide = () => {
  return (
    <AboutMeSlideTemplate
      descriptions={[
        "19歳の自由人",
        "【趣味】",
        "・🐟を市場で仕入れてさばく、お菓子🍰作り",
        "・スキューバダイビング🤿",
        "・アプリ開発",
      ]}
      recentStories={[
        "・タコパがしたいお年頃",
        "・|React Slide Craft|というReactのライブラリをリリース",
      ]}
      techStackImage={TechStackImage.src}
    />
  )
}
