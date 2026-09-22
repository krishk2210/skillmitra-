---
name: Skill Mitra
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#45464e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#76767f'
  outline-variant: '#c6c6cf'
  surface-tint: '#525d82'
  primary: '#00020e'
  on-primary: '#ffffff'
  primary-container: '#0f1b3c'
  on-primary-container: '#7984aa'
  inverse-primary: '#bac5ef'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#fccb5c'
  on-secondary-container: '#735500'
  tertiary: '#000301'
  on-tertiary: '#ffffff'
  tertiary-container: '#002214'
  on-tertiary-container: '#009768'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#bac5ef'
  on-primary-fixed: '#0e1a3b'
  on-primary-fixed-variant: '#3a4569'
  secondary-fixed: '#ffdf9f'
  secondary-fixed-dim: '#f0c052'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is anchored in a **Premium Minimalist** aesthetic, tailored for a high-end educational and career-pathing environment. It balances the authority of a traditional institution with the agility of a modern SaaS platform.

The visual narrative focuses on "aspirational clarity"—using generous whitespace and a sophisticated color palette to reduce cognitive load while navigating complex career data. Key characteristics include:
- **Atmospheric Depth:** Utilizing soft shadows and subtle layering to create a tangible, organized interface.
- **Confident Hierarchy:** Clear distinction between primary actions and secondary information.
- **Refined Professionalism:** Avoiding "tech-bro" coldness in favor of a warm, human-centric academic feel.

## Colors
This design system utilizes a palette that evokes stability and achievement.

- **Primary (Deep Navy):** Used for foundational elements like navigation bars, headers, and high-priority buttons. It represents the "Trust" pillar of the brand.
- **Secondary (Warm Gold):** Reserved for high-conversion moments, premium status indicators, and success-state highlights.
- **Accent (Emerald):** Denotes growth, community interactions, and "Free" tiers.
- **Base (Cream):** The off-white background reduces eye strain compared to pure white and adds a bespoke, editorial feel.
- **Neutral (Charcoal & Slate):** Used strictly for legible content and metadata to maintain a clean information architecture.

## Typography
The system relies on **Inter** for its exceptional legibility and systematic feel. 

- **Display & Headlines:** Use tight letter spacing and bold weights to command attention in headers and hero sections.
- **Body Text:** Standardized on 16px for optimal readability across long-form course descriptions.
- **Labels:** Utilize medium weights and slight tracking for categorization, tags, and small utility text.
- **Hierarchy:** Ensure a clear contrast between `headline-md` and `body-lg` to help users scan content-heavy pages quickly.

## Layout & Spacing
The layout uses a **Fixed Grid** approach for desktop to maintain a premium, centered focus, while transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid with a 1280px max-width. Large 40px outer margins provide the necessary "breathing room" for a minimalistic feel.
- **Mobile:** 4-column fluid grid with 16px margins.
- **Rhythm:** An 8px linear scale guides all internal spacing (8, 16, 24, 32, 48, 64). 
- **Sectioning:** Use 80px to 120px vertical padding between major landing page sections to reinforce the premium, uncrowded aesthetic.

## Elevation & Depth
Elevation is communicated through **Ambient Shadows** rather than harsh borders, creating a "lifted" card effect.

- **Surface Level (0dp):** The off-white background (#F8F7F3).
- **Card Level (Low Elevation):** White background (#FFFFFF) with a 12px blur, 4% opacity black shadow. This is the standard for course cards and content modules.
- **Interactive Level (High Elevation):** Applied on hover or for modals. A 24px blur, 8% opacity shadow with a subtle tint of the primary color to suggest depth.
- **Overlays:** Use a semi-transparent Deep Navy (#0F1B3C) with 40% opacity for modal backdrops to maintain brand consistency.

## Shapes
The shape language is **Rounded**, favoring 8px (0.5rem) as the base radius. This strikes a balance between professional geometry and approachable softness.

- **Standard Elements:** Buttons, input fields, and small cards use the `rounded` (8px) token.
- **Feature Cards:** Larger containers use `rounded-lg` (16px) to emphasize the soft shadow aesthetic.
- **Search Bars / Pills:** Use the `rounded-xl` or full pill-shape for search inputs and category filters to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Deep Navy background, white text. 8px border radius. Medium weight.
- **Subscription/CTA:** Warm Gold background, Deep Navy text. Reserved for "Unlock Premium" or "Join Now."
- **Ghost:** Transparent background with a 1px Slate Gray border for secondary actions like "Save for Later."

### Cards
- White background, 16px border radius, soft 12px shadow. 
- Internal padding should be a minimum of 24px.
- Use a 2px top-border accent in Primary or Secondary colors to categorize card types (e.g., Gold for Premium courses).

### Input Fields
- Subtle 1px border (#E5E7EB) on white background.
- Focus state: 2px Primary Deep Navy border with a soft glow effect.
- Labels are always positioned above the field in `label-md` style.

### Navigation
- **Sticky Header:** White background with a very subtle bottom border or soft shadow.
- **Links:** Deep Navy text, transitioning to a Secondary Gold underline on hover.

### Chips & Badges
- **Free Tag:** Emerald Green background with 10% opacity, Emerald Green text.
- **Category Chips:** Light Gray background, pill-shaped, 12px font size.