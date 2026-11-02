---
version: alpha
name: Vercel Minimal
description: A stark, high-contrast landing system with generous whitespace, precise typography, and restrained motionless depth.
colors:
  primary: "#171717"
  secondary: "#6b7280"
  tertiary: "#e5e7eb"
  neutral: "#fafafa"
  surface: "#ffffff"
  on-surface: "#171717"
  error: "#ef4444"
typography:
  headline-display:
    fontFamily: GeistSans
    fontSize: 64px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: -3.84px
  headline-lg:
    fontFamily: GeistSans
    fontSize: 50px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: -3.36px
  headline-md:
    fontFamily: GeistSans
    fontSize: 39px
    fontWeight: 400
    lineHeight: 47px
  headline-sm:
    fontFamily: GeistSans
    fontSize: 31px
    fontWeight: 400
    lineHeight: 37px
  body-lg:
    fontFamily: GeistSans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.96px
  body-md:
    fontFamily: GeistSans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: GeistSans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: GeistSans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  label-md:
    fontFamily: GeistSans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-sm:
    fontFamily: GeistSans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  code-md:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
---

# Vercel Minimal

## Overview
This system feels austere, precise, and highly technical, with a strong “less is more” editorial tone. It is built for a sophisticated audience of developers and product teams that value clarity, speed, and trust over decoration. The composition is spacious and calm, with a single bold focal point and very little visual noise.

## Colors
- **Primary (#171717):** A near-black ink used for the main text, primary actions, and the central geometric mark. It establishes the brand’s sharp, high-contrast identity.
- **Secondary (#6B7280):** A muted gray for supporting or de-emphasized UI text when needed. It should stay quiet and never compete with the main foreground color.
- **Tertiary (#E5E7EB):** A light neutral used for hairline borders, subtle separators, and understated outlines. It helps define structure without adding weight.
- **Neutral (#FAFAFA):** The warm off-white page background that gives the layout its open, breathable feel. This is the dominant surface tone in the interface.
- **Surface (#FFFFFF):** Pure white for interactive surfaces and elevated content when a cleaner contrast layer is needed.
- **On-surface (#171717):** The default readable foreground on light surfaces. Use it for most text and iconography.
- **Error (#EF4444):** A functional accent reserved for destructive states or validation feedback. It should remain rare and highly purposeful.

## Typography
Geist Sans is the primary type family throughout the experience, with a clean, modern, slightly compressed presence. Headings are light-weight and tightly tracked, especially at display sizes, which creates a refined, almost typographic poster feel. Body text stays neutral and readable, while labels and buttons use a medium weight for clarity and affordance. Uppercase treatment is not a major visible pattern; instead, the system relies on scale, spacing, and contrast rather than aggressive letter-casing.

## Layout
The layout is expansive and centered, with large negative space around the hero and a restrained top navigation. Content appears to sit within a wide fluid container rather than a narrow editorial column, allowing the brand mark and calls to action to breathe. Vertical rhythm is generous, using the spacing scale from 2px to 80px, with most meaningful separations landing on 12px, 20px, 32px, and 80px. Buttons and small clusters use compact internal padding, while major sections rely on large outer margins and empty space.

## Elevation & Depth
Depth is intentionally minimal. The UI avoids heavy shadows, glossy gradients, and layered cards; instead, hierarchy comes from typography scale, whitespace, and stark contrast against the off-white background. Where separation is needed, use thin 1px borders in the tertiary gray rather than shadow stacks. The central triangle’s soft glow is an exception and serves as a focal atmospheric effect, not as a reusable elevation pattern.

## Shapes
The shape language is soft and fully rounded for controls, paired with otherwise very geometric composition. Pills and rounded buttons use full radii, while cards and utility surfaces use small to medium radii for a quiet, modern finish. The overall feel is architectural and minimal rather than playful.

## Components
Buttons favor simplicity and strong contrast. Use `button-primary` for the main call to action: it should be dark, pill-shaped, 40px tall, and padded generously for a stable tap target. Use `button-secondary` as the inverse outlined pill with a transparent fill and a 1px dark border. Use `button-link` only for tertiary actions or navigation-style text links; it should have no border, no fill, and underlined text.

Cards should be very restrained, using `card` with a light neutral surface, 8px rounding, 1px border, and 16px padding. Avoid decorative shadows; a card should feel like a simple container, not a floating panel.

Inputs should visually align with cards: white or near-white fill, 8px rounding, dark text, and modest padding. Keep borders subtle and avoid loud focus treatments that would conflict with the brand’s minimal tone.

Chips and small pills should mirror the button language with full rounding and compact internal spacing. They should read as quiet status or filter elements, not as expressive badges. Icons should be monochrome and follow the same `on-surface`/`primary` contrast rules.

## Do's and Don'ts
- Do keep layouts spacious and centered, with generous empty areas around hero content.
- Do use Geist Sans for nearly all UI text, reserving Geist Mono only for code-like contexts.
- Do preserve the strict black-on-off-white palette for the strongest brand expression.
- Do use full-radius pills for primary and secondary actions.
- Don't introduce heavy shadows, glass effects, or colorful gradients.
- Don't overcrowd sections with dense card grids or multiple competing focal points.
- Don't use large blocks of lowercase copy styling, uppercase labels, or decorative typography treatments.
- Don't soften the contrast too much; the system depends on crisp separation between text and background.