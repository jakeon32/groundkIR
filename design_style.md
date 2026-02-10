# Design System Specification: T-Ride: Destination Mobility Architecture

## 01. Summary
A precision-engineered mobility platform interface focusing on high-luminance clarity. The design utilizes a strict asymmetric grid to balance typographic weight against modular interaction zones, emphasizing a 'function-first' aesthetic with sharp vector iconography and hairline dividers.

## 02. Style & Typography
- **Header**: Inter, system-ui, sans-serif; Weight: 700; Tracking: -0.02em; Color: #111111 (tracking: -0.05em, leading: 0.85)
- **Body**: Noto Sans KR, Inter, sans-serif; Weight: 400; Size: 15px; Leading: 1.6 (Normal)
- **Technical/Label**: JetBrains Mono, monospace; Size: 12px; Color: #888888 (tracking: 0.15em)
- **Base Color**: #FFFFFF
- **Borders**: 1px Hairlines (#3A3A38 at rgba(0, 0, 0, 0.06) opacity)

## 03. Chromatic DNA
- Canvas Background: #FFFFFF
- Primary Action (Obsidian): #1A1B1E
- Secondary Surface: #F8F9FA
- Technical Metadata: #6B7280

## 04. Layout & Structure
- **Background**: Asymmetric 12-column grid. Hero section utilizes a 5:7 split. Content section utilizes a symmetric 1:1 split.
- **Logic**: Container-based grouping with uniform R12px corner radii. Information density is managed through 'Card-in-Card' nesting for the service selection modules.
- **Partitioning**: Strong contrast between Dark Hero and Light Body sections.

## 05. Special Components
Pill-shaped status badges (MVP), Ghost buttons with hairline strokes, Icon-driven comparison cards, Input fields with minimal affordance.

## 06. Master AI Prompt
High-fidelity UI design of a mobility service platform named 'T-Ride'. Technical minimalist style. Architectural white background. Hero section split: Left side features bold sans-serif typography 'Destination Based Mobility Integration' with two pill-shaped buttons (Obsidian Black and White with Stroke). Right side features a floating 'glass-morphism' style card containing abstract mobile device silhouettes and service selection blocks (Shuttle vs Private). The lower section displays a symmetric comparison grid of two large cards with line-art icons and checklists. Clean, precise, vector-sharp lines, ample negative space, corporate memphis influence, 8k resolution.

## Implementation Target
React + Tailwind CSS. Focus on 1px grid-gaps and zero-radius geometry. Primary accent used strictly for status indicators and primary CTAs. Dark Hero section is non-negotiable.