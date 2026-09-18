# Playlab design system

Playlab is a **non-profit** that builds a platform where educators make and share their own AI
apps — small, purpose-built assistants for a class, a unit, a reading. Teachers write the prompt,
try it, revise it, and share a link with students; students need no accounts unless the teacher
wants them. The product surface is `app.playlab.ai`, and its home screen is a grid of apps the
educator or their school has made.

The design language is **Swiss-modern with one register**. A twelve-column grid, a container
scale and an 8px spacing scale govern every surface — product, marketing, slides, brand
documents alike. Pages sit on one of three near-neutral page colours. Type is a single family at
two weights, Medium the ceiling. Structure comes from one light-grey hairline and the grid, never
from ink frames or shadows. Ink is text and the primary button. A small highlight set and a
16-hue palette are available everywhere; the discipline is restraint, not prohibition.

The reason for all of it is principle two: **our brand stays out of the way**. When an educator
makes something on Playlab, what they are making should be the loudest thing on the screen.

## Sources

Everything here derives from one repository:

- **<https://github.com/playlab-education/playlab-design>** (branch `main`)
  - `design-model.yaml` — the single source of truth: principles, the numbered rule set with its
    retired list, primitives, semantic tokens for light and dark, type, spacing, radii, motion,
    elevation and component specs.
  - `tokens.css` — generated from the YAML; the values in `tokens/` here are copied from it.
  - `skills/playlab-design/SKILL.md` and `references/` — tokens, components, states, grid,
    motion, voice, imagery, platform mappings.
  - `surfaces/component-library.html`, `app-screen.html`, `slides.html`,
    `proto-button-matrix.html` — browsable exemplars.
  - `assets/logo/` — the ten official logo SVGs, copied here in full.

If you can reach that repo, read it: `design-model.yaml` is more precise than any prose, and the
component library surface shows every state in one page. **Version 3.1.0 (09.06.2026)** is the
release this system was built from. `github.md` at the project root records the sync.

Two of the exemplar surfaces (`app-screen.html`, `slides.html`) predate the v3 reset and still
carry retired patterns — card tiers, monospace uppercase chrome, `--font-mono`. Where an exemplar
and the rule set disagree, **the rule set wins**, and this system follows the rule set.

---

## Content fundamentals

Voice is the other half of the brand. Playlab writes quietly on purpose: the tools should not
insist on a tone, because the language educators bring is the point.

**Register.** Plain words. Short sentences. Active voice. Second person for instructions
("Share with class"), first person plural only when Playlab itself is speaking ("We think this
might help with reading comprehension"). Never a branded verb, never "Playlab it".

**Casing.** Sentence case everywhere — labels, eyebrows, buttons, chrome, table headers, page
footers. There is no uppercase requirement anywhere in the system, and uppercase is never paired
with wide tracking to imitate monospace chrome.

**Punctuation.** No middle dots, pipes, bullets or dashes used as glue between fragments.
"Olivia T · Feb 15" is written "Olivia T, Feb 15", or split onto two lines. Exclamation marks are
almost never used in marketing and never in product.

**Emoji.** Not used. Not in product, not in marketing, not in slides. Iconography is Phosphor.

**Describe, don't celebrate.**

| We write | Not |
|---|---|
| Draft saved 2 minutes ago. | Saved! |
| Add an app. | Create a new AI experience |
| 3 apps in progress. 2 ready to share. | You're crushing it! |
| Nothing matches these filters. Try clearing one. Or start a new one. | Oops, nothing here! |
| We couldn't load your apps. Try again, or reload the page. | An error occurred. |
| Delete this app? It will be removed from everyone you've shared it with. | Are you sure?! This can't be undone! |

**Say what's unfinished.** Drafts, versions and edits are first-class, and the copy names them:
"Drafts in flight, 3", "v4 of 4", "Currently testing a less-leading-question variant". We share
hypotheses rather than claims — "We figure most teachers start by remixing an example", not
"Proven to improve outcomes".

**Invite, don't market.** No upsells, no growth nudges, no loss aversion. CTAs are invitations:
"Try it", "See examples", "Start with an example". Never "Get started now", "Sign up free",
"Don't miss out". As a non-profit, the product has no revenue competing for the user's attention,
and the copy should never imply otherwise.

**Treat educators as practitioners.** Explain rather than simplify. "Set how the assistant
responds to vague questions. Most teachers start strict and loosen up." Not "Let's make your
first app — it's easy!". Avoid edu-jargon used for its own sake.

**Adjectives are rare.** Especially "powerful", "intuitive", "delightful". Specific beats
flowery: "Class lists you've shared with at least once" over "Recent classes".

**Labels are nouns; buttons are imperative verb phrases.** "Apps", "Settings", "Class lists" —
not "Manage Apps". "Save changes", "Share with class", "Delete app".

**Sentences are ink.** Any running text with a verb and a full stop is `--text1`, whatever its
size. `--text2` and `--text3` are for fragments only: subtitles, eyebrows, metadata, timestamps,
counts, captions, axis labels. Grey paragraphs read as disabled.

**Labels stack.** An eyebrow or section id sits on its own line above the title; a subtitle or
role sits on its own line below. A small label and a large title never share a baseline. Same for
a metric and its unit or delta.

**Say it once.** Four dots with one filled already say "step 2 of 4"; don't also write it. Cover
one of the two encodings — if nothing is lost, delete it.

---

## Visual foundations

### Colour

Three page colours: grey `#fafafa`, cream `#fbf9f6` (the default), white `#ffffff`. A twelve-step
neutral ramp from white through ink `#0c0f14`. Three highlights: mist `#eff0e5` marks every
selected and marked state, yellow `#feffa0` and chartreuse `#c8ff3d` are deliberate emphasis used
sparingly. Sixteen hues (tan, warm tan, pale sky, pale cyan, mid blue, blue, orange, red, bright
yellow, chartreuse, olive, lime, green, palest pink, pale pink, pink) available on every surface —
nothing is marketing-only. Blue is an ordinary hue; links happen to use it. **No invented hex** —
tints are made by alpha compositing on a canonical value. Text and icons on any highlight or tint
are ink.

**Dark mode inverts the page, not the system.** The three page colours collapse to ink, cards sink
to deeper ink, text becomes cream. Hairlines stay quiet grey. Highlights and the ink text on them
are invariant. Link, success and error use lifted dark values. Shadows become inset highlights.

### Type

One typeface: **Neue Haas Grotesk Text**, from Adobe Fonts. Two weights: 400 regular by default,
500 medium as the ceiling for hierarchy, used sparingly. Nothing heavier — `tokens/base.css`
clamps `b`, `strong`, `th` and h1–h6 to 500. Code, chrome and quotes are the same family; code
sits on `--code-surface`, quotes are 400 italic. Thirteen semantic sizes on a Perfect Fourth scale
(1.333) anchored at 16px body: hero, display, title, heading, subheading, body, body-sm, meta,
meta-sm, chrome, label, caption, quote. Letter-spacing on heads derives from size. If a heading
needs more presence, make it larger or give it more space — never heavier.

### Spacing, grid and layout

8px base with nine steps (2, 4, 8, 16, 24, 32, 48, 64, 96). Twelve columns everywhere, 24px gutter
desktop and 16px mobile, 48px / 16px margins. Six containers and no ad-hoc `max-width`:
`--w-form` 520, `--w-prose` 640, `--w-marketing` 1200, `--w-app` 1280, `--w-wide` 1440,
`--w-bleed` 100%. Three section rhythms: 64, 96, 160. Fixed elements are rare — the sidebar rail
(72px, or 240px expanded), a floating toast at the bottom-right, and modal scrims.

### Backgrounds

Flat fills only. **No gradients** anywhere — buttons, cards, sections, backgrounds. No repeating
patterns, no textures, no noise in the UI. Full-bleed sections happen as a page-colour or pale-hue
strip with the content grid still anchored inside. Slides may take a saturated plate
(chartreuse, lime, pink, olive) edge to edge; product surfaces do not.

### Borders, cards and elevation

**One hairline: `1px solid #dbdbdb`.** Cards, inputs, dividers, table rules, secondary buttons,
popovers, chart frames, dashed placeholders — all the same line. No ink borders, no coloured
borders, no 1.5px or 2px rules, no coloured side stripes. Exactly one exception: an interactive
open card may step its hairline to `--outline-hover` `#b8b8b1` on hover, still 1px, still grey.

Four card surfaces — **Filled** (white, no outline; inside a structured grid), **Outlined** (white
+ hairline; directly on the page), **Open** (transparent + hairline; secondary content) and
**Interactive** (Open, hairline steps on hover). All four: 8px radius, 24px padding, no shadow.
Colour never enters a card through its border; it enters as fill — a tinted icon tile, a tinted
header or footer band, a pale body with a saturated stat band, a duotone media block.

Radii: 4px controls, 8px surfaces, 16px modals, pill for chips and tags only. **Buttons are never
pills; cards never exceed 8px.**

**Shadows only on things that float** — popovers, dropdowns, modals, toasts, tooltips, drag
previews get `--shadow-2` or `--shadow-3` plus a hairline. Nothing else has a shadow. In dark mode
the drop shadow is replaced by an inset top highlight, because a drop shadow on near-black is
invisible.

**Dividers only where structure needs them** — between table rows, list rows, a card's action
footer and its body, a chart baseline, a page footer. Never a decorative rule under a heading,
label or eyebrow.

### Transparency and blur

Effectively unused. The only alpha in the system is the modal scrim (`rgba(12,15,20,0.4)`), the
status tint backgrounds, and the duotone media treatment (a hue at ~0.25). **No backdrop blur, no
frosted glass, no translucent chrome.** Type is never set at reduced opacity — hierarchy comes from
the neutral ramp, not from fading ink.

### Motion

Four durations and nothing between them: 100ms instant (hover colour, focus fill), 140ms fast
(press, selection), 220ms medium (tooltip, dropdown, page transition, mode switch), 360ms slow
(modal, drawer). Three easings, all ease-out or ease-in-out — `--ease-fast`, `--ease-medium`,
`--ease-slow`. **Never bounce, never overshoot, never spring.** No `transition: all`. Motion
changes only opacity, transform, colour, border-colour and background-colour — never width,
height or layout. `prefers-reduced-motion` drops everything to zero and resolves keyframes to
their first frame.

### Hover, press, focus and selection

- **Hover** changes fill, not border: `--surface1` on rows, chips, menu items, ghost and secondary
  buttons. Primary buttons darken to `#252528`. Static cards do not hover. The interactive open
  card is the one component whose hairline changes.
- **Press** is `transform: translateY(1px)`. No shrink, no colour flash.
- **Focus** is a fill, never a ring. Chips, rows, cells, cards and menu items fill `--ink` with
  inverse text; inputs and buttons fill `--highlight-mist` with ink text. There is no outline, no
  second border, no glow anywhere in the system.
- **Selected** is mist: `--highlight-mist` fill, ink text, hairline unchanged, label to 500.
- **Disabled** is opacity 0.3 on controls, 0.5 on surfaces, with pointer events off. Never a
  colour shift.

### Imagery

Spare, one image per section at most, with room around it. Photography shows process and action
in context — hands on keyboards, screens mid-edit, real classrooms, real drafts — never staged
stock, never a smiling actor, never a glossy hero device render. Natural colour by default; the
only sanctioned treatment is the **duotone media card** (image flattened to one hue over a pale
body of the same hue). No vignettes, no colour casts, no gradient overlays, no lens flares.

Illustration references the visual world of making: scribbles, grid paper, markers, cut-outs,
irregular polygons, pixelated organic forms — ink line-work on a highlight or pale-hue plate.
Rough edges stay rough; compositions look assembled, not designed. Avoid vector-perfect geometry,
generic SaaS illustration libraries, 3D isometric renders and character mascots.

When the real asset is missing, render an **honest placeholder**: a mist or pale-hue block with a
hairline, 8px radius, and a sentence-case label saying what belongs there. A labelled placeholder
beats wrong imagery. In dark mode, light-authored screenshots get a `--surface2` frame with the
standard hairline so they don't pop.

Capsule labels on imagery — 11px 500, sentence case, pill, `--surface2` with a hairline — carry
real context ("Oakland USD, March 2026"), never decoration.

### Logo

Black mark on light surfaces, paper or white on dark or saturated ones. Never faded, never
shadowed, never recoloured outside the shipped colourways.

---

## Iconography

**Phosphor, regular weight**, loaded from CDN — it is the kit named in the source model, and the
source ships no icon font, sprite sheet or SVG icon set of its own. Only the logo lockups are
shipped as assets.

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2/src/regular/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2/src/fill/style.css">
```

- **Outlined by default.** Filled (`ph-fill`) only for emphasis moments — metric cards, status
  glyphs, the active sidebar item.
- **Sizes**: 16 inline, 18 in buttons, 20 in nav. Product icons read as simple outline glyphs at
  roughly 1.75px stroke with rounded terminals and minimal detail — ink on cream.
- **Boxed icon tiles** (44px, hairline, 4px radius) for spec sheets and content cards; naked
  glyphs for rails and toolbars, with a `--highlight-mist` fill behind the active one.
- **Accessibility**: an icon beside a label is `aria-hidden`; an icon-only control carries an
  `aria-label`. Text that exists only for assistive technology never appears on screen.
- **No emoji.** No unicode characters standing in for icons, with one exception the source itself
  makes: the trailing `→` on a section pill link.
- Glyphs used across the source surfaces: `folder-open`, `users-three`, `calendar-dots`,
  `buildings`, `book-open`, `question`, `gear`, `magnifying-glass`, `funnel`, `plus`,
  `pencil-line`, `dots-three-vertical`, `caret-down/up/left/right`, `check`, `check-circle`,
  `circle`, `x`, `arrow-up`, `lock-key`, `sun`, `moon`, `bookmark-simple`.

Use `Icon` (below) rather than raw `<i>` tags so sizing and aria treatment stay consistent.

---

## Index

```
readme.md              this file — brand context, content and visual foundations, index
SKILL.md               Agent Skills front-matter, for use in Claude Code
github.md              source repository and sync record
styles.css             global entry point; @import list only
thumbnail.html         homepage tile
tokens/                colors, typography, spacing, layout, elevation, motion, fonts, base
guidelines/            21 foundation specimen cards (Colors, Type, Spacing, Brand)
assets/logo/           ten official Playlab logo SVGs
components/            54 React primitives in nine groups
ui_kits/playlab-app/   click-through recreation of app.playlab.ai
slides/                nine slide templates at 1280×720
templates/             two starting folders consuming projects can copy
```

### Templates

- `templates/app-screen/` — the Playlab app screen: icon rail, page head, stats strip, filter
  chips and an app-card grid, composed from this system's own components.
- `templates/slide-deck/` — five 16:9 slides: title, section opener, three-up cards, stat strip
  and a pull quote on a chartreuse plate.

Both load the system through `ds-base.js`; point its `base` line at the bound design-system
folder when you copy a template into a consuming project.

### Tokens

`styles.css` imports, in order: `tokens/fonts.css` (the Typekit `@import` and the family stack),
`colors.css`, `typography.css`, `spacing.css`, `layout.css` (containers and the `.grid-12`
helper), `elevation.css`, `motion.css` (including the reduced-motion guard and the mode-switch
cross-fade) and `base.css` (document defaults, the weight ceiling, link colours, selection).

### Components

Fifty-four primitives. Every one is a `.jsx` with a sibling `.d.ts` props contract and a
`.prompt.md` usage note. Each group directory carries one `@dsCard` HTML showing its states.

**`components/foundation/`** — `Icon`

**`components/buttons/`** — `Button`, `IconButton`, `ToggleButton`, `SegmentedControl`,
`SectionPillLink`, `InlineLink`

**`components/chips/`** — `FilterChip`, `Tag`, `StatusBadge`, `NumberedBadge`

**`components/cards/`** — `Card` (the four surfaces), `AppCard`, `ContentCard`, `ArticleCard`,
`HorizontalCard`, `CompactCard`, `IconTileCard`, `TintedBandCard`, `TintedHeaderCard`,
`DuotoneMediaCard`, `ChartCard`, `EventCard`

**`components/forms/`** — `TextInput`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`,
`Slider`, `DatePicker`

**`components/data/`** — `Avatar`, `AvatarGroup`, `ListRow`, `DataTable`

**`components/navigation/`** — `Header`, `Sidebar`, `UnderlineTabs`, `PillTabs`, `HorizontalNav`,
`Breadcrumb`, `Pagination`

**`components/overlays/`** — `Modal`, `Popover`, `DropdownMenu`, `Tooltip`, `Toast`, `Drawer`,
`Accordion`

**`components/feedback/`** — `Alert`, `Progress`, `Spinner`, `Skeleton`, `EmptyState`

#### Intentional additions

- **`Icon`** — the source names Phosphor as the kit but ships no wrapper. This is a thin one, so
  every glyph gets the right size, prefix and aria treatment. It adds no visual decisions.
- **`AvatarGroup`** — the source specifies the overlapping cluster and the "+N" collapse inside
  the Avatar spec; it is split out here so the rule lives in one place.

Everything else maps one-to-one onto a family in `references/components.md`. No component was
invented to round out a "standard set".

### UI kits

`ui_kits/playlab-app/` — the product surface: My apps (grid, stats strip, filter chips, drafts in
flight, filtered-empty state), App detail (list-detail with version history and the prompt panel,
plus Overview and Sharing tabs) and Settings (single-column form at `--w-form`). See its own
README for what is interactive and what was deliberately left out.

### Slides

`slides/` — nine 1280×720 templates: title, title with plate, section opener, table of contents,
three-up cards, stat strip, pull quote on chartreuse, dark title, product screenshot hero. The
frame is container-queried, so a slide scales to any width.

---

## Caveats

- **The typeface is licensed.** Neue Haas Grotesk Text comes from an Adobe Fonts kit that checks
  the referrer, so on an unauthorised origin every surface here falls back to Helvetica Neue /
  Helvetica / Arial — the fallback the source itself authored. No font binaries are included and
  none can be. **No Google Fonts substitution has been made**: a substitute would silently change
  every measurement in the type scale, and Helvetica is the closer relative anyway. If you have a
  licence that permits self-hosting, drop the files in and add the `@font-face` rules to
  `tokens/fonts.css`.
- **Icons are CDN Phosphor**, as specified. Nothing to copy in.
- **No illustrations or photography were available** in the source repository, so imagery appears
  throughout as labelled placeholders, per the rule in `references/imagery.md`. Real assets would
  improve the UI kit and the slides considerably.
