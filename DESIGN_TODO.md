# DESIGN_TODO.md — Jocelyn Pang Personal Brand Website

## 6. Implementation Checklist

### Phase 1: Foundation
- [x] Set up design tokens (CSS variables)
- [x] Import fonts (Fraunces + Inter)
- [x] Create base typography styles
- [x] Create button components
- [x] Create card components

### Phase 2: Layout
- [x] Build responsive container (max-width 1120px)
- [x] Build 12-column grid system
- [x] Create section wrapper with alternating backgrounds
- [x] Build hero section layout

### Phase 3: Sections
- [x] Hero section
- [x] Credibility bar
- [x] How I Help (3 pillars)
- [x] Selected Work
- [x] Speaking section
- [x] About section
- [x] Final CTA / Contact forms

### Phase 4: Polish
- [x] Add hover/focus states
- [x] Add subtle transitions
- [x] Mobile responsiveness pass
- [x] Accessibility check (contrast, focus states)
- [ ] Performance optimization

---

## Project Overview
Build a one-page personal brand website for a digital commerce strategist-operator specializing in Southeast Asia. The design should convey **warm minimalism**, **calm confidence**, and **commercial clarity**.

---

## 1. Design Tokens (Implement First)

### Color Palette
| Token Name | Hex | Usage |
|------------|-----|-------|
| `--bg-primary` | `#FBF7F2` | Warm White — Main background |
| `--bg-surface` | `#F4EEE6` | Soft Cream — Cards, alternating sections |
| `--text-primary` | `#1F1F1F` | Charcoal — Headings, body text |
| `--text-secondary` | `#5C564F` | Warm Gray — Secondary text, captions |
| `--accent` | `#B88A62` | Oat — Buttons, links, underlines |
| `--accent-hover` | `#7A5538` | Cocoa — Hover/active states |
| `--border` | `#E6D9CB` | Sand — Hairline borders, dividers |

### Color Usage Rules
- 80–90% warm whites/creams
- 10–15% charcoal text
- 3–5% oat accent (buttons, links, underlines only)

### Typography
**Option A (Recommended — Modern Editorial)**
- Headings: `Fraunces` (serif)
- Body: `Inter` (sans-serif)

**Type Scale**
| Element | Size | Notes |
|---------|------|-------|
| H1 | 48–56px | Tight tracking |
| H2 | 28–32px | Section headings |
| H3 | 20–22px | Card titles |
| Body | 16–18px | Paragraph text |
| Small | 14px | Captions, labels |

### Spacing System
- Max content width: `1120px`
- Grid: 12 columns
- Section padding: `96px` (desktop) / `64px` (mobile)
- Card border-radius: `16–20px`
- Border width: `1px`
- Shadow: Very soft, almost invisible (`0 2px 8px rgba(0,0,0,0.04)`)

---

## 2. Component Specifications

### Buttons
- **Primary Button**
  - Background: `--accent` (#B88A62)
  - Text: `--bg-primary` (#FBF7F2)
  - Border-radius: `8px`
  - Padding: `14px 28px`
  - Hover: `--accent-hover` (#7A5538)
  - Focus: `2px` outline in `--accent`

- **Secondary Button**
  - Background: transparent
  - Border: `1px solid --accent`
  - Text: `--accent`
  - Hover: Background `--accent`, text `--bg-primary`

### Links
- Color: `--text-primary`
- Hover: `--accent` underline
- No underline by default (except in body text)

### Cards
- Background: `--bg-surface`
- Border: `1px solid --border`
- Border-radius: `16px`
- Shadow: soft
- Padding: `32px`
- Max 3 lines of copy per card

### Dividers
- Color: `--border`
- Height: `1px`
- Use between major sections

### Icons
- Style: Line icons only (thin, simple)
- Stroke width: `1.5px`
- Color: `--text-secondary` or `--accent`

---

## 3. Page Sections (Build Order)

### 3.1 Hero Section
**Layout:** Two-column (desktop), stacked (mobile)
- Left: Headline, subhead, CTAs
- Right: Portrait image in soft rounded rectangle

**Content:**
```
Headline: Build digital commerce that actually scales across Southeast Asia.

Subhead: I help brands turn ecommerce into a durable growth pillar—with commercial accountability, clean execution, and systems that last.

Primary CTA: Work with me
Secondary CTA: Invite me to speak

Micro-detail (optional): Based in Singapore • Works across SEA
```

**Image:** Portrait photo in rounded container (border-radius: `20px`)

---

### 3.2 Credibility Bar
**Layout:** Horizontal row of 4 items (desktop), 2x2 grid (mobile)
**Style:** Subtle, not flashy — small text, icons optional

**Items:**
1. Multi-market launches: MY, PH, VN in 6 months
2. Commercial ownership: Channel P&L + performance
3. Regional execution: SG, MY, PH, VN, TH, ID
4. Capability building: social commerce, affiliates, content selling

---

### 3.3 How I Help (3 Pillars)
**Layout:** 3-column card grid (desktop), stacked (mobile)
**Background:** `--bg-surface` section

**Cards:**

**Card 1: Scale across SEA complexity**
> Southeast Asia isn't one market. I help you build a strategy that respects local realities without losing regional coherence.

**Card 2: Conversion systems that stick**
> Funnels across social commerce, affiliates, content selling—designed so your team can run them consistently.

**Card 3: Performance with accountability**
> Media optimization tied to commercial outcomes—because dashboards don't pay salaries.

---

### 3.4 Selected Work
**Layout:** 3 story cards, stacked or grid
**Background:** `--bg-primary` section

**Card 1: Channel launches that became growth pillars**
> Launched digital commerce channels across Malaysia, Philippines, and Vietnam in under six months—built to continue delivering after launch.

**Card 2: Owning performance at scale**
> Led channel performance and execution across six SEA markets with a focus on profitable growth, not vanity metrics.

**Card 3: Capability, not dependency**
> Worked across enablers, MCNs, TSPs, agencies, and local teams to build internal operating capability that lasts.

---

### 3.5 Speaking Section
**Layout:** Left-aligned text with CTA
**Background:** `--bg-surface` section

**Content:**
```
Intro: I speak to leadership teams and operators about what actually breaks at scale:

Topics (bullet list):
• Why digital commerce strategies fail after the plan looks "right"
• Building growth pillars instead of fragile channel wins
• Operating SEA multi-market commerce without chaos

CTA: Invite me to speak
```

---

### 3.6 About Section
**Layout:** Centered or left-aligned paragraph
**Background:** `--bg-primary` section

**Content:**
```
I've spent the last decade working at the intersection of commerce, performance, and execution across Southeast Asia.

My work is about clarity: the few moves that unlock durable growth.
```

---

### 3.7 Final CTA / Contact
**Layout:** Centered, two-tab or two-column form
**Background:** `--bg-surface` section

**Intro text:**
> If you're scaling across markets—or rebuilding a digital growth pillar—I can help.

**Two Forms:**

**Consult Form:**
- Name
- Email
- Company
- "What are you trying to solve?" (textarea)

**Speaking Form:**
- Name
- Email
- Event type
- Audience size
- Date range
- Topic interest

---

## 4. Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Desktop | `>1024px` | Full layout |
| Tablet | `768px–1024px` | 2-column grids |
| Mobile | `<768px` | Single column, stacked |

---

## 5. Assets Required

### Images
- [ ] 1 primary portrait (warm, clean, confident)
- [ ] 1 speaking photo (optional)

### Fonts
- [x] Fraunces (Google Fonts)
- [x] Inter (Google Fonts)

### Icons
- [ ] Line icon set (Lucide, Feather, or similar)

---

## 7. Brand Voice Reminders (For Any Copy Edits)

**DO:**
- Lead with outcomes
- Use short sentences, strong verbs
- Use "I help / I work with / I build"

**DON'T:**
- List tools, platforms, acronyms as proof
- Say "end-to-end", "data-driven", "10 years experience"
- Use excessive buzzwords

**Signature Phrases:**
- "durable growth pillar"
- "systems that last"
- "commercial accountability"
- "SEA complexity"
- "capability, not dependency"

---

## 8. Quality Checklist

- [x] Warm minimalism achieved (not cold, not cluttered)
- [x] Oat accent used sparingly (3–5% only)
- [x] Typography hierarchy clear
- [x] All interactive elements have hover/focus states
- [x] Forms are accessible and functional
- [x] Mobile experience is polished
- [ ] Load time is fast
- [ ] No stock photography vibes
