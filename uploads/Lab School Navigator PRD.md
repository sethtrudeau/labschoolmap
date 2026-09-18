---
Date: 2026-09-15
Project: Playlab
Status: Needs Review
tags: ["playlab", "lab-schools", "learning-engineer", "prd", "prototype"]
---
# PRD — The Lab School Navigator

**An interactive planning guide for Learning Engineers**

| | |
|---|---|
| Owner | Seth Trudeau |
| Status | Draft for design |
| Date | 2026-09-15 |
| Content source | [Seth Draft — Learning Engineer Lab School Playbook](https://app.notion.com/p/3cda9d3778c58026ad6ed0ff9e294c26) (Notion) |
| Scope of this doc | Prototype — no auth, no backend |

---

## 1. Why this exists

Learning Engineers walk into lab school engagements and hit the same seven or eight recurring dysfunctions: the school is in love with a solution, or can't say what success looks like, or has a single entangled idea that can't be built in pieces. The playbook that captures these lives in Notion as a reference doc — a flat list of challenges, each with a diagnosis and a set of facilitation moves.

A reference doc is the wrong shape for that content. Nobody reads a Notion page in the twenty minutes before a site visit, and nobody remembers which of the twenty-two moves they meant to try. The content is fundamentally **diagnostic** (which challenge am I looking at?) and **prescriptive** (what do I do about it, in what order?), and a document can't do either job.

**What we're building:** a web app where an LE diagnoses the challenge they're facing, sees the specific facilitation moves that address it, and assembles a chosen sequence of moves into a named, reusable plan for a particular school engagement.

**What success looks like:** an LE builds a deck before a site visit and runs the visit off it. Decks get named after schools, shared between LEs, and reused across engagements. The playbook content stops being read and starts being used.

---

## 2. The users

**Primary: Learning Engineers.** Small team, high context. They already know the content or will learn it fast. They need retrieval speed, not onboarding. They're planning a specific conversation with a specific school leader, usually under time pressure.

**Secondary (later, out of scope): lab school leaders themselves.** A deck could eventually be a shared artifact in the room — "here's the sequence I'm proposing we work through." Design shouldn't preclude this, but don't build for it yet.

### Jobs to be done

1. *"Something is off with this school and I can't name it."* → diagnostic entry via the floor map.
2. *"I know it's a Gordian knot. What do I actually do Tuesday?"* → direct entry to a table, deal the cards.
3. *"I have a three-hour working session to plan."* → deck building, ordered.
4. *"What was that framework with the jelly?"* → direct card lookup, no diagnosis path.
5. *"I ran this last month at Ector County. What did I do?"* → saved decks.

---

## 3. The concept: a casino

The organizing metaphor is a casino floor. Each **challenge to anticipate** is a **game** at its own table. Each **possible move** is a **card**. The LE walks the floor, sits at the table matching what they're seeing, the dealer deals the moves available there, and they keep the cards they want. Across many tables they build a **deck**, then **stack the deck** — put their chosen moves in the order they'll play them.

### Why a casino and not a toolkit

The metaphor isn't decoration; it encodes three things the content actually asserts.

**Bets, not answers.** Every move in the playbook is a wager on an uncertain outcome. The doc's own language is about risk, odds, signals, and evidence quality. A casino frames facilitation honestly: you're choosing where to place a limited number of chips, not applying a correct procedure.

**Hands, not items.** The moves compose. "Premortem" then "Solid/Jelly/Vapor" is a different play from either one alone. Cards and decks make combination the primary unit, which a checklist cannot.

**Limited chips.** LEs have one site visit, not twelve. Prioritization is the constraint, and the casino makes scarcity visible.

### ⚠️ The brand tension — resolve it this way

Playlab's design system is **paper + ink + one yellow highlighter**: cream `#fbf9f6` field, ink `#0c0f14` linework, flat, no gradients, generous negative space. A casino is conventionally neon, felt green, gold, and glossy. Those are irreconcilable if the casino is rendered literally.

**The resolution: this is a casino drawn on paper, not a casino photographed.**

Think of an architect's floor plan of a casino, or the diagram on the back of a rules card — ink linework on cream stock. Tables are outlined shapes with mono labels. Cards are white rectangles with 1px ink borders. Chips are ink circles with mono numerals. The single yellow highlighter mark is the one table or card currently in focus. No felt textures, no neon, no gold leaf, no drop shadows, no gradients. The *language* is casino; the *surface* is paper.

If a design pass ever produces something that looks like a Vegas landing page, it's wrong. It should look like a workshop artifact about a casino.

---

## 4. The seven tables

Each challenge is a game. The names are wayfinding — they give each table a distinct shape on the map and a handle that's easier to hold than "Problem Specification." Don't over-read them. Once you're inside a table, every game plays exactly the same way: read the diagnosis, deal the cards, keep the ones you want.

| #   | Challenge (source doc)  | Game                 |
| --- | ----------------------- | -------------------- |
| 1   | Use Case Definition     | **Roulette**         |
| 2   | Problems over Solutions | **Three-Card Monte** |
| 3   | Problem Specification   | **Craps**            |
| 4   | Iterative Process       | **Blackjack**        |
| 5   | Success Definition      | **The Cage**         |
| 6   | Gordian Knots           | **Slots**            |
| 7   | Prioritization          | **Poker**            |

### Card backs — one design per challenge

Every move card belongs to exactly one challenge, and **each challenge has its own card back**: a distinct brand-inspired pattern, shared by all the move cards at that table, with the **move name** set on it.

This is the main visual system in the product, and it does real work. Once a deck mixes moves from five different tables, the backs are how an LE reads the deck — seven recognizable patterns, so composition is visible at a glance without reading a word. It also means the name is legible before a card is opened: in the deal and in a stacked deck you see *what the move is called*, and turn it over for the full description.

**Back anatomy:**

- **Move name** — Instrument Sans, bold, ink. The dominant element. Must stay legible at thumbnail size.
- **Pattern** — flat ink linework, identical across every card at that table.
- **Challenge name** — Spline Sans Mono, uppercase, small, along the bottom edge.
- 1px ink border, 4px corner radius, white or cream fill. No shadow, no gradient, no foil.

**Pattern direction (proposals — design's call to refine):** each pattern should read as a printer's ornament or a diagram, not an illustration. Flat, geometric, ink-only. All seven must be distinguishable at thumbnail size and in greyscale print.

| Challenge | Pattern direction |
|---|---|
| Use Case Definition | Concentric arcs radiating from one corner — a wheel implied, never drawn whole |
| Problems over Solutions | Three offset nested rectangles, one shifted off-register |
| Problem Specification | A scattered field of dice pips at varying density |
| Iterative Process | Staggered overlapping rectangles, stepping across the card |
| Success Definition | Horizontal bands of varying stroke weight, light to heavy |
| Gordian Knots | Vertical columns with one break running through them |
| Prioritization | Stacked ink circles of varying size — a chip stack in elevation |

**On color:** keep all seven backs ink-on-cream. Assigning a pale tint per challenge would put seven colors in one view of a mixed deck, which breaks the palette. Pattern alone should carry the differentiation; if it can't at small sizes, vary ink density before reaching for color.

---

## 5. Information architecture

```
The Floor (landing — map view)
├── Table: Roulette ─────────┐
├── Table: Three-Card Monte  │  Challenge view
├── Table: Craps             │  → What's happening
├── Table: Blackjack         │  → Why it might be happening
├── Table: The Cage          │  → Key questions
├── Table: Slots             │  → [Deal the cards] → the deal → add to deck
└── Table: Poker ────────────┘
│
├── The Card Catalog (all cards, no diagnosis path required)
│     filter by challenge · search
│
└── My Decks
      ├── Deck detail / Stack the Deck (ordered, named, editable)
      └── [New deck] (build manually from catalog)
```

Three entry points, always reachable from persistent nav: **Floor**, **Cards**, **Decks**. The diagnostic path (Floor → Table → Deal) is the front door but never a gate — an LE who knows exactly what they want goes straight to Cards.

---

## 6. Screens

### 6.1 The Floor (landing)

A map view of the casino floor, rendered as an ink floor plan on cream.

**Layout.** Seven tables positioned in a deliberate, non-grid arrangement — a floor plan has rooms and walkways, not rows. Tables are drawn as their real-world shapes: roulette has a wheel and a bet layout, craps is the long boat, blackjack and poker are arcs, slots is a bank of upright cabinets, the cage is a windowed counter along a wall. Shapes are outlines in ink at 1px, filled white or `#eff0e5`, labels in Spline Sans Mono uppercase.

**Each table shows:** game name (Instrument Sans, bold), the challenge name it maps to (mono, uppercase, smaller — the diagnostic label matters more than the game name), and a card count in mono.

**Hover / focus.** The focused table gets the one yellow `#feffa0` mark on the floor — a highlighter swipe under its label, or a yellow fill on the table shape. Exactly one at a time. A short diagnostic line appears on hover: for Three-Card Monte, *"They're in love with a solution."* This is the real navigation aid — an LE scanning the floor is looking for the sentence that matches what they just heard in a meeting.

**Must work at phone width.** The floor plan reflows to a single column of table cards, keeping the shape glyphs but dropping the spatial arrangement.

**Secondary affordances.** A small persistent indicator of the active deck, if one is open ("Building: *Ector County — Oct visit* · 4 cards"), so cards can be added while walking the floor without losing context.

### 6.2 Table view (challenge detail)

Entered by selecting a table. Content is verbatim from the playbook — this is the diagnostic payload and must not be paraphrased in the build.

**Structure, in order:**

1. **Table header** — game name, challenge name, tagline.
2. **What's happening** — the observable symptom. Set this largest; it's what the LE is pattern-matching against.
3. **Why it might be happening** — the diagnosis. This is the most valuable and most easily skipped content; give it room and don't collapse it behind a disclosure by default.
4. **Key questions** — a list. These are things the LE asks *in the room*, so they need to be scannable and copyable. Treat each as a discrete line the user can copy to clipboard individually.
5. **[Deal the cards]** — primary action, ink-filled boxy button, 4px radius.

Design note: resist the urge to show the cards on this screen. The deal is a deliberate beat — read the diagnosis first, then see the moves. The separation is the pedagogy.

### 6.3 The deal

Triggered from a table. The dealer lays out **every** move card belonging to that table, fanned or in a spread.

**Why all of them, not a random three:** these aren't a shuffled deck of equivalent options — they're the complete set of known moves for that challenge, and two tables currently hold only two cards each (see §10 note). A random deal would both hide relevant moves and break on thin tables. "Deal" is the *gesture*; completeness is the behavior.

**What the spread shows.** Cards land **back up** — the challenge pattern with the move name on it (§4). The LE reads the names, then turns over the ones they want to understand. Since every card at a table shares one back, the spread reads as a matched set, which is the point: these are the moves for *this* challenge.

**Animation.** Cards deal in sequence with a short stagger (~60–80ms apart), sliding and settling. Keep it under ~600ms total. Respect `prefers-reduced-motion` — cards appear without motion.

**Card face (turned over):**

- Move name — Instrument Sans, bold
- Full move description from the playbook
- Any nested sub-structure, rendered as structured content — several moves carry internal frameworks with their own lists (the four SVPG risks, the three development stages, the red/yellow/green bands, the four leverage points). These must not be flattened into a paragraph.
- Challenge name, bottom, mono uppercase, small

**Turning a card.** Flip in place, or expand — design's call. Whichever it is, the LE must be able to have several cards face-up at once to compare moves, and must be able to turn a card back over.

**Add to deck.** Each card has an add affordance. Adding gives immediate, quiet feedback (the card marks as in-deck; the deck counter increments). Adding the same card twice is prevented — a card can appear in a deck once. If no deck is active, the first add creates an untitled deck and prompts for a name inline (not a modal — don't interrupt the flow).

### 6.4 The Card Catalog

All cards from all tables, always reachable, no diagnosis required.

**Controls:**

- Filter by challenge (7 options)
- Free-text search across move name and description
- Toggle: grid of card backs / compact list

The default grid view shows **backs**, which makes the catalog scan as seven visually grouped families. Selecting a card turns it over in place.

**The one-yellow rule applies here and is easy to break.** A filter UI wants to highlight every active chip. Don't — make the challenge filter single-select, so at most one yellow chip shows in the filter bar.

Cards in the catalog carry the same add-to-deck affordance as in the deal.

### 6.5 Deck builder — "Stack the Deck"

The payoff screen. A deck is an **ordered sequence** of moves the LE intends to play, drawn from any tables.

**Elements:**

- **Deck name** — editable inline. Default suggestion pattern: school name + occasion ("Ector County — Oct site visit").
- **Ordered card list.** Each entry shows position number (mono), the card at small size with its back pattern visible, move name, source challenge, and a handle. Drag to reorder; keyboard-accessible reorder (up/down controls or arrow keys) is required, not optional — drag-only is inaccessible.
- **Per-card note.** A free-text field on each card *within this deck* — "use with the 9th grade team, 20 min." This is the single most important thing separating a deck from a bookmark list: it holds the LE's situational intent. The note belongs to the deck entry, not to the card globally.
- **Deck composition readout.** The back patterns already show the mix visually; back it up with a small mono count by challenge (`Iterative 3 · Gordian 2 · Prioritization 1`). Show the counts and let the LE read them — don't editorialize automatically.
- **Remove card.**
- **Add more cards** — link into the catalog with the deck kept active.

**Deck actions:** rename, duplicate, delete (with confirm), and a print/export view.

**Print view matters.** LEs will want this on paper or on a phone in a meeting. Provide a clean, linear read-only rendering: deck name, then each move in order with its full description and the LE's note. Cream, ink, print-safe. This is likely the most-used surface once decks exist.

### 6.6 My Decks

List of saved decks. Each row: deck name, card count (mono), a small strip of the back patterns it contains, last edited (mono). Actions: open, duplicate, delete. Plus **[New deck]**, which creates an empty named deck and drops the user into the catalog to fill it.

Empty state — plain, no marketing: *"Nothing here yet. Start at a table, or build a deck by hand from the cards."*

---

## 7. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | Floor map displays all 7 tables with game name, challenge name, and diagnostic line | Must |
| FR-2 | Selecting a table opens the challenge view with What's happening, Why, and Key questions rendered verbatim | Must |
| FR-3 | "Deal the cards" spreads all move cards for that table, back up, with staggered animation | Must |
| FR-4 | Each challenge has a unique card back carrying the move name; all cards at a table share it | Must |
| FR-5 | Turning a card over shows the full move description including nested sub-frameworks as structured content; multiple cards can be face-up at once | Must |
| FR-6 | Any card can be added to the active deck from the deal or the catalog; duplicates prevented | Must |
| FR-7 | Card Catalog lists all cards, filterable by challenge, with text search | Must |
| FR-8 | Decks can be created, named, renamed, duplicated, and deleted | Must |
| FR-9 | Deck cards can be reordered by drag *and* by keyboard | Must |
| FR-10 | Each deck entry supports a free-text note scoped to that deck | Must |
| FR-11 | Decks persist across page reloads | Must |
| FR-12 | Deck print/export view renders the full ordered plan for reading on paper or phone | Must |
| FR-13 | Individual key questions are copyable to clipboard | Should |
| FR-14 | Deck composition readout — count of cards by challenge | Should |
| FR-15 | Cards can be added to a deck while browsing the floor (active-deck indicator persists) | Should |
| FR-16 | Deck export as a shareable link or file | Could |
| FR-17 | Deck sharing between LEs via accounts | Later — out of scope |

---

## 8. Design system application

Pull the full spec from the `playlab-design` repo. Non-negotiables for this build:

**Color.** Cream `#fbf9f6` page, always — never white. Ink `#0c0f14` for text, all linework, card outlines, and primary button fills. `#eff0e5` for quiet fills (table shapes, secondary cards). White `#ffffff` for card faces and inputs, always with an ink border. **Exactly one** `#feffa0` yellow mark per view — the focused table, or the selected filter chip, or the focus ring. Not two.

**Card backs are the exception that proves the rule** — seven patterns, all ink-on-cream, no tints (§4). A mixed deck puts all seven in one viewport; color-coding them would put seven fills on screen at once and break the palette outright.

**Type.** Instrument Sans for everything structural — game names, move names, body, buttons, labels. Spline Sans Mono for all data and chrome: card counts, positions, timestamps, composition readouts, challenge labels, deck metadata. EB Garamond upright, for one purpose only if used at all: a pull quote of the "What's happening" line on the table view. Never in nav, buttons, or card titles.

**Form.** 4px boxy buttons, never pills. Pills only for filter chips and tags. Depth from 1px ink outlines only — **no drop shadows**, including on cards, and especially not on the dealt cards where the temptation will be strongest. No gradients anywhere. No felt, no neon, no gold.

**Voice.** Plain words, short sentences, no pitch. Casino language is allowed where it's load-bearing ("deal," "stack the deck," "the cage") and should stop there. Don't write "Ready to try your luck?" Don't gamify with points or streaks — LEs are practitioners, and the metaphor is about honest uncertainty, not fun.

**Typography details.** Real glyphs throughout: `'` `"` `…` `—`. Straight ticks only inside code.

---

## 9. Data model & scope

### Prototype scope

**In:** all seven tables and their full content, seven card-back designs, all cards, floor map, deal, catalog with filters, deck CRUD, ordered stacking, per-entry notes, print view, `localStorage` persistence.

**Out:** authentication, accounts, server persistence, deck sharing, multi-user, analytics, content editing in-app, mobile app.

### Model

```js
Card {
  id: string            // stable slug, e.g. "premortem"
  name: string          // set on the card back
  tableId: string       // one of 7 — also determines the card back
  body: string          // full move description
  structure?: [...]     // nested sub-framework, when present
}

Table {
  id, game, challengeName, tagline, diagnosticLine,
  backPattern: string,  // asset or component id for this challenge's card back
  whatsHappening, whyItsHappening, keyQuestions: string[]
}

Deck {
  id, name, createdAt, updatedAt,
  entries: [ { cardId, note } ]   // order is array order
}
```

Card and Table content is static — ship it as a JSON/JS data file, not hardcoded in components, so the playbook can be updated without touching the UI. Decks are the only mutable state.

**Persistence.** `localStorage`, single key holding the deck collection. Wrap every read and write in try/catch and render correctly when storage is empty or throws. Decks are per-browser and will not survive a different device — acceptable for a prototype, and worth a one-line note in the UI so an LE doesn't lose work they thought was saved.

### Path to logged-in

Keep the deck store behind a thin interface (`listDecks`, `getDeck`, `saveDeck`, `deleteDeck`) so the `localStorage` implementation can be swapped for a server or an artifact-database backend without touching screens. Don't build auth; don't design around its absence either — the UI should look the same before and after, minus a user menu.

---

## 10. Content inventory

All content below is drawn from the source playbook. **Render it verbatim in the build.** Move names are what appear on the card backs; body text must not be paraphrased.

### Table 1 — Roulette · Use Case Definition

**Diagnostic line:** "They can't say what's genuinely transformational."

**What's happening:** Schools have difficulty articulating their truly H3 use cases and/or assume that using new technology automatically makes something H3.

**Why it might be happening:** Schools usually procure software — a pre-packaged solution that belongs to a defined category. We are asking them to think about challenges and opportunities to design solutions for, and they don't necessarily know which of those fit with an AI-enabled software paradigm, so they fall back to the defined software categories they are familiar with.

**Key questions:**
- What are the deep distinctives behind the school model?
- What are the biggest bets the school is making to bring their model to life?
- Where are the biggest leverage points for transformational impact?

**Cards:**

| Move | Body |
|---|---|
| **Vision calibration** | Dig into the vision, mission, philosophy, and defined distinctives with the school. |
| **Future cones** | Within a defined time frame, explore what could be probable, plausible, possible. You can use different thematic or conceptual areas to generate both directly related and tangential influences. |
| **Design fiction** | Come up with a narrative set in the school in 5 years as a means of getting them to express big dream ideas. |
| **Mental models** | ⚠️ **Stub in source doc — no description written.** Needs content before this card can ship. |

### Table 2 — Three-Card Monte · Problems over Solutions

**Diagnostic line:** "They're in love with a solution."

**What's happening:** Schools fall in love with a specific solution rather than an acutely felt problem.

**Why it might be happening:** Similar to use case definition, acquiring solutions fits known behavior patterns better. Defining a problem with clarity and then developing the solution that works for that problem is a different orientation and a different skill, so it will not always be the natural first direction (and sometimes an off the shelf solution actually does solve the problem well enough).

**Key questions:**
- How well do they understand the problem they are trying to solve? Who is affected, how are they affected, why are they affected, why do they care about solving it?
- How clearly can they articulate how they'd know that a solution actually works? (Note: not what they want the solution to do, but what outcome they want it to produce)

**Cards:**

| Move | Body |
|---|---|
| **Classify by stage of development** | Classify the problem by stage of development and focus on just what needs to be done to move to the next stage. **Structure:** *Exploration (least developed)* — you're working on getting a better understanding of the problem and why it matters to solve. *Prototyping* — for a well-defined problem, you're exploring a range of options to see how well each can actually solve the problem. *Development (most developed)* — you have a working prototype that solves the problem, and now you're refining it to integrate into normal use. |
| **Solution interrogation** | Work backwards from the solution they are asking for to understand the underlying problem behind it, what else they've tried to address that problem, where the shortcomings of previous solutions have been. |
| **Storyboarding** | To understand core elements of the problem, build a scenario around who would be using the solution, in what circumstances, why, and how. |

### Table 3 — Craps · Problem Specification

**Diagnostic line:** "They can't see what might break."

**What's happening:** Schools have difficulty identifying the risks and unknowns within a problem space that will determine whether a solution can actually work.

**Why it might be happening:** Disaggregating all of the elements that influence how well a product works is a lot — it's a combination of both external contextual factors and a variety of different solution components. Most people only evaluate on the basis of the outcome and aren't oriented toward evaluating a complex system (also, some people are overly optimistic).

**Key questions:**
- What could go wrong?
- What have you seen go wrong with this in the past?
- What elements of what you're currently doing with this problem are working well? Why?
- What elements aren't working well? Why?
- What signals have you seen that make you think this is the right direction to go?
- What signals have you seen that make you question or doubt this direction?

**Cards:**

| Move | Body |
|---|---|
| **Premortem** | Have them imagine a year in the future where this product has proven to be an utter disaster and talk through what would have gone wrong to identify risks. |
| **SVPG 4 risks** | New products always have to address 4 categories of risk. Work with them to lay out and evaluate the quality of the evidence they have for each category. **Structure:** *First* — value (does anyone want it) and feasibility (can it actually produce the value). *Then* — usability (can the user access the value) and viability (does it work within the organization's financial model). |
| **Solid / Jelly / Vapor** | To make intuitive evaluation of problems visible, classify understanding of the problem or confidence in the proposed solution as Solid (super confident we've got it right), Jelly (we've got some strong insight or evidence, but not totally sure), or Vapor (this is an early idea with not much behind it yet). To ground intuitions, make the evidence behind each claim explicit and determine if the strength of the evidence matches up with the confidence level. |
| **Business Model Canvas** | (Or similar.) It's imperfect, but it helps expose any of the essential elements to make a product work and can be used with a red/yellow/green classification system to identify the evidence for how well different pieces of the overall picture are working. |

### Table 4 — Blackjack · Iterative Process

**Diagnostic line:** "They're trying to get it right the first time."

**What's happening:** Schools don't plan for an iterative process and try to get everything right the first time.

**Why it might be happening:** There are a few different dynamics in play. Often in schools, a certain thing only happens at one particular time in the school year, so if it doesn't work at that particular time, then it's a whole year before you can try it again. Teachers also frequently get shiny new things foisted on them that don't actually live up to the hype, so there's fear of rolling something out that doesn't work as advertised.

**Key questions:**
- How would we know that this is moving in the right direction?
- What opportunities do we have to test this small before rolling out big?
- What is essential to get right immediately vs nice to have?
- What is truly novel about what we're trying to do?

**Cards:**

| Move | Body |
|---|---|
| **Monkey & pedestal** | Identify what is the actual hard, unknown part of this problem vs. the parts that are straightforward but require some effort. Start with the monkey, not the pedestal. |
| **The wood block prototype** | Resist the temptation to jump to MVP. Prototypes can help you develop understanding of parts of a solution without actually building a fully functional version of the solution. A prototype is a test to learn, whereas an MVP is a test to validate the full picture of what you've built. |
| **Smallest, quickest, cheapest tests** | Match the scope of your test to your level of understanding and certainty about problem and solution. The goal is to find the right solution as efficiently as possible, which means throwing out wrong solutions at the earliest possible point. |
| **The good enough proxy tests** | A corollary to smallest, quickest, cheapest tests — not all prototype tests have to happen with the target user. Lots of early prototypes never leave the lab because a colleague played around with it and surfaced a problem. Don't let the desire for the perfect test hold you back from getting into testing quickly. |

### Table 5 — The Cage · Success Definition

**Diagnostic line:** "They can't say what a win looks like."

**What's happening:** Schools have difficulty specifying testing metrics and success criteria.

**Why it might be happening:** Sometimes it's a matter of searching for a silver bullet — the problem itself is too vast in scope, so there's a huge number of imprecise metrics or a single monolithic one that is unrealistic. Sometimes it's a matter of lack of experience in measurement and analysis that leads to a tendency to want to measure sentiment. (Tangent: survey results not paired with some sort of behavioral indicator are not to be trusted.)

**Key questions:**
- If this problem was solved, what would be different?
- What would the target user do that indicated the solution was working for them?
- How can we measure outcome and impact rather than sentiment?
- How can we measure how well specific aspects are working before we test the whole thing?

**Cards:**

| Move | Body |
|---|---|
| **Contrasting cases** | Similar to a premortem, except it is imagining a best case and a worst case scenario at some point in the future after introducing a solution. This surfaces differences and identifies actual changes that indicate success. |
| **Red / Yellow / Green bands** | Sometimes the challenge is figuring out what the right level of performance is to evaluate something. Instead of defining binaries, define ranges. **Structure:** *Red (<x) — back to the drawing board*: a metric that falls below this threshold indicates that this is not the right approach to the problem. *Yellow (x–y) — moving in the right direction*: this at least confirms the approach and might even be good enough for now (i.e., you can focus less on optimizing this piece and focus on something else that's in worse shape). *Green (>y) — good to go*: something that falls above this threshold is working as well as we need it to. |

### Table 6 — Slots · Gordian Knots

**Diagnostic line:** "Nothing can work until everything works."

**What's happening:** Schools have a big, entangled idea where no piece can work without the whole thing being built.

**Why it might be happening:** This is usually indicative of a really ambitious vision and a somewhat fixed point of view about how to reach that vision, but a lack of corresponding clarity about how to get from here to there.

**Key questions:**
- How can we break this down into its specific elements to understand what each part needs to do?
- How can we determine if each part is working on its own before we try and test it all together?
- What alternatives are there for achieving similar outcomes?

**Cards:**

| Move | Body |
|---|---|
| **Surface the underpinning assumptions** | Often the person who has a Gordian knot has been trying to untie it for a long time and has a lot of insights about the problem space. Make as much of their conceptual model explicit, and identify the key assumptions about what it takes to untie the knot (and sometimes stress test those assumptions). |
| **Map the system** | Disentangle and disaggregate. Identify all of the different elements of the system that work together, plot out the relationships, and spell out what each piece is supposed to do independently. |
| **Find the leverage point** | There are a few potential leverage points to look for. **Structure:** *The monkey* — as in Monkey & Pedestal, the most unknown and uncertain part of the system. If it doesn't work, the whole system doesn't work. If you have a monkey, start with the monkey. *The key dependency* — identify whether there is an element of the system that needs to do the heaviest lifting. Are lots of other parts of the system dependent on it? In a linear process this could be the first part of the system, but it isn't always. *The handoff* — sometimes there's a critical or sensitive handoff between two (or more) parts of a system, and the biggest issue is the way that something moves from one to the other. *The beginning* — if you can't find one of the other leverage points, start at the beginning with whatever triggers the system into action. |
| **Explore alternatives** | In the spirit of falling in love with problems over solutions, surface the outcome(s) that the knot is meant to achieve and explore alternative versions of the knot or opportunities to modularize the system. |

### Table 7 — Poker · Prioritization

**Diagnostic line:** "Everything feels urgent."

**What's happening:** Schools want to do everything at once, resulting in incremental growth across the board, and/or schools focus on low leverage use cases that are the most feasible but don't actually have transformative potential.

**Why it might be happening:** When you're deep in the day to day realities, you see every little thing that isn't working right and feel the impact of it. You're also sitting in the heart of a complex adaptive system, so the most natural approach to those problems is reactivity. Even when you step back from it, everything feels urgent.

**Key questions:**
- What is at the highest risk of breaking soon?
- What would be the most difficult break for us to recover from, even if it's low likelihood?
- If you could only bet on 1 thing to make the biggest impact, what would it be?

**Cards:**

| Move | Body |
|---|---|
| **The critical / urgent Eisenhower matrix** | Plot all of the possible directions and ideas on the x-axis from left (least critical) to right (most critical), then — maintaining their x-axis position — plot them on the y-axis from bottom (least urgent) to top (most urgent). **Structure:** *Critical* = most damage if it breaks. *Urgent* = most at risk of breaking. |
| **Product development staging** | To combat the urge to get everything now, classify every possible direction into 4 categories. **Structure:** *Backlog* — a known problem that we're not focusing on now. *Exploration* — a known problem that we need to understand better, specifically how we'd know if we were solving it well. *Prototyping* — a problem where we'd know how to tell if it was getting better, but we don't know what the solution is. *Development* — a problem where we have the right solution, but we need to make it work for wide use. |

### Content gaps to close before build

**22 complete cards, 1 stub.** Two issues worth resolving before or during design:

1. **"Mental models" (Roulette) is an empty bullet in the source doc.** Either write it or cut the card.
2. **The Cage and Poker hold only two cards each**, against four at most other tables. A two-card "deal" is a thin moment, and these are two of the challenges LEs hit most often. Either write more moves for those tables, or accept the asymmetry and design the deal so a two-card spread still looks deliberate rather than broken.

---

## 11. Open questions

1. **Chip cost / table stakes.** Should cards carry a weight indicator — how much time and trust a move takes (a 15-minute reframe vs. a half-day workshop)? It would make deck-building realistic about a three-hour session, and chips are the natural visual. Not in the requirements above; flagging as a strong candidate for v2.
2. **Do the seven back patterns hold up at thumbnail size?** This is the one real risk in the visual system. Seven ink-only patterns, no color, legible in a deck row and in greyscale print — worth testing as flat artwork before the UI is built around them.
3. **Should a deck be able to hold key questions, not just moves?** LEs may want to carry two or three diagnostic questions into the room alongside their moves. Cheap to add; changes the deck entry model.
4. **Cross-table recommendations.** When a school shows one challenge, they usually show a neighbor — Gordian Knots travel with Prioritization. Should the table view point at related tables?
5. **Is the casino legible to lab school leaders?** Fine for internal LE use. If a deck ever becomes a shared artifact in the room, "I'm dealing you cards" may land badly with a superintendent. Worth deciding before the metaphor reaches partner-facing surfaces.
