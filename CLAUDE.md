# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 slide presentation application for HASURO's technical presentations. The app uses `react-slide-craft` as the core slide framework for creating and displaying presentation slides. The site is deployed at https://slides.hasuro.com and redirects root traffic to `/me`.

## Development Commands

- **Development server**: `npm run dev` (runs on port 4500 with Turbopack)
- **Build**: `npm run build`
- **Production server**: `npm start` (runs on port 4500)
- **Lint**: `npm run lint`

## Architecture & Key Dependencies

**Core Framework**: Next.js 15 with App Router
**Slide System**: `react-slide-craft` - Main library for slide creation and presentation logic
**Styling**: Tailwind CSS v4
**Animations**: Framer Motion, Lottie React
**Fonts**: Next.js font optimization with Geist and Zen Maru Gothic

## Code Structure

### Slide Organization
- Individual slide collections are organized under `src/app/[collection-name]/` (e.g., `/lt/progate250529/`, `/me/`)
- Each collection has its own `page.tsx` that imports slide components from a local `(slides)/` or `(slide)/` directory
- Slides are assembled into arrays and passed to `SlideCore` component

### Slide Creation Pattern
```typescript
// Each page.tsx follows this pattern:
const slides = [
  SlideComponent1,
  SlideComponent2,
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
```

### Color System
The `useColors` hook provides CSS variable access:
- `colors("dark", "text")` → `var(--text-color-dark)`
- `colors("light", "bg")` → `var(--bg-color-light)`
- `colors("white")` → `var(--color-white)`

### Reusable Components
- **Templates**: `src/app/components/common/slides/templates/` - Reusable slide templates like `AboutMeSlideTemplate`
- **Common slides**: `src/components/common/slides/` - Shared slides like `EndSlide`
- **UI components**: `src/components/` - Custom slide decorations and animations

### Assets
Static assets are in `src/assets/` including icons, animations (Lottie JSON), and images.

## Key Files

- `src/app/layout.tsx` - Root layout with Japanese locale and metadata
- `src/app/page.tsx` - Root page that redirects to `/me`
- `src/hooks/useColors.ts` - Color system utility
- Slide collections: `src/app/lt/progate250529/`, `src/app/me/`