# Create Slides Command

You are helping to create a new react-slide-craft presentation in the HASURO slides project.

## Command Usage
The user will invoke this with: `/create-slides [path]`
where `[path]` is the path under the app directory (e.g., `lt/progate250529`)

## Phase 1: Setup Project Structure

1. Parse the path argument from the user's command
2. Create the following directory structure under `src/app/[path]/`:
   - `page.tsx` - Main slide presentation page
   - `layout.tsx` - Layout for the slide collection
   - `(slides)/` - Directory for slide components
   - `(docs)/` - Directory for documentation

3. Generate the basic `page.tsx` template:
```typescript
"use client"

import { genSlideObject, SlideCore } from "react-slide-craft"
import { EndSlide } from "../../components/common/slides/EndSlide"
import { useColors } from "@/hooks/useColors"
import { Zen_Maru_Gothic } from "next/font/google"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  preload: false,
})

export default function [PascalCaseName]Page() {
  const colors = useColors()

  const slides = [
    // Slides will be added here
    genSlideObject(EndSlide, { isBaseStyle: true }),
  ]

  return (
    <SlideCore
      slides={slides}
      baseSlideStyle={{
        textColor: colors("dark", "text"),
        backgroundColor: colors("light", "bg"),
        fontFamily: zenMaruGothic.style.fontFamily,
      }}
    />
  )
}
```

4. Generate a basic `layout.tsx`:
```typescript
export default function [PascalCaseName]Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

## Phase 2: Gather Slide Information

Ask the user for the following information:
1. **Presentation title and theme**
2. **Target audience**
3. **Main topics to cover**
4. **Approximate number of slides desired**
5. **Any specific slide types needed** (cover, about me, technical content, results, etc.)
6. **Visual style preferences** (if any)

## Phase 3: Create Slide Structure Documentation

Based on the user's input, create a detailed slide structure in `(docs)/layout.md` with the format:
```markdown
# [Presentation Title] - Slide Structure

## Overview
[Brief description of the presentation]

## Target Audience
[Target audience description]

## Slide Structure

1枚目: CoverSlide - [Description of cover slide content]
2枚目: AboutMeSlide - [Description if applicable]
3枚目: [SlideType] - [Detailed description of slide content and purpose]
...
N枚目: EndSlide - [Closing slide]

## Implementation Notes
[Any specific implementation details for Claude Code]
```

## Phase 4: Implementation Confirmation

Ask the user: "スライドの構成ドキュメントを作成しました。実装フェーズに進んでよろしいですか？"

## Phase 5: Implementation

If confirmed, implement the slides:

1. Create each slide component in the `(slides)/` directory
2. Follow existing patterns from `src/app/lt/progate250529/(slides)/` and `src/app/me/(slide)/`
3. Use `react-slide-craft` components like:
   - `SlideBase`
   - `TitleText`, `SubTitleText`, `BoldBodyText`
   - `Row`, `Column`, `Container`
   - `List`, `Spacer`
   - `Image` for slide images
4. Import and add each slide to the slides array in `page.tsx`
5. Use the `useColors` hook for consistent theming
6. Follow the existing naming conventions

## Important Notes

- Always use the existing project patterns and components
- Maintain consistency with the current slide style
- Use the `useColors` hook for all color references
- Follow the TypeScript patterns established in the codebase
- Create meaningful, descriptive slide components
- Ensure all slides are properly imported and added to the slides array