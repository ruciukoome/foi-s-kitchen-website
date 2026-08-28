# Home hero: amuze-style flipping hero with a horizontal card rail

Rebuild the Foi's Kitchen home hero to match the reference layout from the other project, with one change you asked for: the thumbnail cards sit in a **horizontal row** (not a vertical stack) and slide sideways as the main background image flips.

## What it looks like

```text
+-----------------------------------------------------------+
|  NAIROBI · CATERING & MEAL PREP        (full-bleed photo)  |
|                                                            |
|  Home-style food, cooked                                   |
|  fresh and delivered hot.                                  |
|  short supporting line                                     |
|  [ Order now ]  [ See the menu ]                           |
|                                                            |
|                [card][ACTIVE CARD][card][card]<- horizontal|
|              <  o o o o  >                                 |
+-----------------------------------------------------------+
```

- Full-width hero photo with a warm charcoal overlay; headline, sub-line and both CTAs fade-up on load and on each slide change.
- A horizontal rail of image cards, centred near the bottom of the hero (desktop/tablet). The active card is larger with a light ring; neighbours are smaller and dimmer. When the main image flips, the whole rail slides horizontally so the new active card moves into the centre.
- Clicking any card jumps to that slide. Prev/next arrows plus dot indicators below the rail.
- Swipe left/right anywhere on the hero changes slides on touch devices.

## Slides

Four food-led slides using existing photography, each with its own headline, one line of copy and a destination:

1. Catering for events -> Request a quotation
2. Meal prep plans -> Meal Prep Plans page
3. Order today's food -> Order Online
4. The full menu -> Menu

Copy stays short and warm, in brand voice. Prices stay off the hero.

## Design and motion

- Brand tokens only: cream/white, charcoal-brown overlay and text, ochre for the active CTA, active card ring and active dot.
- Transitions 300–450ms ease-out: cross-fade on the background, slide + scale on the cards, fade-up on text. No parallax, no particles.
- Reduced-motion users get instant swaps (existing global rule already covers this).

## One conflict to flag

Your brand rules say "no carousels" and "no auto-playing" motion, while the reference hero auto-advances every 5 seconds. Default in this plan: **no auto-play** — the hero only changes on click, arrow, dot or swipe. Say the word if you'd rather it auto-advances slowly (e.g. every 7s, pausing on hover/interaction).

## Responsive

- Mobile: hero fills the viewport height minus the sticky order bar; cards become a compact horizontally scrollable strip with snap, all tap targets at least 44x44px.
- Tablet/desktop: centred rail with 3–4 cards visible, max content width 1280px.

## Technical notes

- New component `src/components/HeroCarousel.tsx` holding slide data, state, keyboard/swipe handling and the horizontal card rail.
- `src/routes/index.tsx` swaps its inline hero block for `<HeroCarousel />`; the rest of the page (features, categories, Meal of the Day, how it works, testimonials, footer CTA) is untouched.
- Reuses existing assets in `src/assets` and the existing `PrimaryLink` / link styles; no new dependencies, no backend changes.