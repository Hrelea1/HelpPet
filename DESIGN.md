---
name: Emerald & Gold Medical
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#404944'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#4a2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a3700'
  on-tertiary-container: '#ff9939'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
---

## Brand & Style
The brand personality for this design system is authoritative yet deeply compassionate, bridging the gap between high-end medical clinical excellence and the emotional bond of pet ownership. It targets discerning pet owners who seek the highest tier of veterinary care.

The visual style is **Corporate / Modern** with a strong infusion of **Glassmorphism**. It utilizes a "Premium Clinical" aesthetic: heavy use of whitespace to signify hygiene and clarity, paired with rich, deep tones and metallic accents to signify exclusivity and value. The interface should feel calm, structured, and expensive, moving away from the crowded, high-contrast orange of the current design toward a more rhythmic and serene professional environment.

## Colors
The palette is rooted in **Deep Emerald Green (#064E3B)**, which serves as the primary anchor, providing a sense of growth, vitality, and clinical stability. This replaces the aggressive oranges of the legacy brand with a more tranquil, high-trust tone.

**Slate Grey (#475569)** is used for secondary elements and primary body text to ensure professional legibility without the harshness of pure black. **Soft Gold (#D97706)**, utilized sparingly as a tertiary accent, provides "The Premium Touch"—appearing in interactive highlights, small badges, or active states to denote a superior service tier. 

The background is a crisp **Off-White/Neutral (#F8FAFC)**, ensuring the UI remains airy and the photography (the emotional core) stands out.

## Typography
The typography strategy employs a sophisticated serif-sans contrast. **Playfair Display** is the editorial voice, used for headlines to convey history, elegance, and expertise. Large display headers should use tight letter-spacing for a modern "fashion-medical" look.

**Inter** provides the functional counterbalance. It is used for all body copy, navigation, and data to ensure maximum readability and a technical, modern feel. The "label-caps" style is particularly important for breadcrumbs and overlines (e.g., "DESPRE NOI"), providing a structured, categorized feel to the content sections.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (12 columns, 1280px max-width) and a fluid 4-column grid on mobile. To improve visual hierarchy, the "Section-Gap" is intentionally generous (120px) to allow content to breathe—this whitespace is a hallmark of premium design.

Vertical rhythm is based on an 8px baseline. Elements should be grouped using proximity: information cards should have internal padding of at least 32px to avoid a "cramped" clinical feeling. On mobile, margins reduce to 20px, and section gaps compress to 64px to maintain momentum while scrolling.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Glassmorphism**. Primary containers (like service cards or navigation bars) should use a subtle backdrop blur (12px to 20px) with a semi-transparent white fill (80-90% opacity).

Shadows must be "Ambient": extremely diffused, using the Deep Emerald or Slate Grey as a tint rather than pure black. This prevents the "muddy" look of standard shadows. A secondary layer of depth is added via **Subtle Outlines**—1px borders in a very light grey or a low-opacity Gold for active states—creating a "jeweled" crispness to the UI.

## Shapes
A **Rounded (0.5rem)** logic is applied to balance clinical precision with the softness associated with pet care. While sharp corners (0) feel too aggressive and pill-shapes (3) feel too "app-like" and casual, the intermediate 8px radius provides a modern, professional structure. Large containers and hero images may use the `rounded-xl` (1.5rem) setting to create a friendly frame for photography.

## Components
### Buttons
Buttons are high-contrast. The primary action uses the **Deep Emerald Green** with a subtle, inner-glow top border and an elegant "lift" hover effect. Typography within buttons should be Inter Bold with slightly increased letter spacing.

### Cards
Service and info cards utilize the glassmorphism effect. On hover, the 1px border should transition from Light Grey to **Soft Gold**, accompanied by a soft, colored shadow cast.

### Input Fields
Fields are clean and minimalist: a 1px Slate Grey bottom border that transforms into a Deep Emerald fill on focus. Labels use the "label-caps" typography style for a technical, organized appearance.

### Interactive Accents
Use the **Soft Gold** for small interactive elements like custom radio buttons, checkboxes, and bullet point icons. This ensures that even small functional details feel considered and premium.

### Imagery
All photography should be framed with generous margins and slightly rounded corners. Use "Medical-Lifestyle" shots: high-key lighting, clean backgrounds, and focused, calm interactions between staff and animals.