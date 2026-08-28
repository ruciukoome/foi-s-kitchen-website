# Hero: move the cards into a clamped horizontal deck on the right

Move the thumbnail rail out of the bottom strip (red zone) and into the right-hand area of the hero (yellow zone), as an overlapping horizontal deck — same idea as the amuze-ke hero, rotated from vertical to horizontal.

## What changes

```text
+-----------------------------------------------------------+
|  ORDER ONLINE                                              |
|  For the days you'd                     [ ][ACTIVE][ ]     |
|  rather not cook.                        overlapping deck  |
|  short supporting line                                     |
|  [ Order now ] [ Order online ]                            |
|                       <  o o o o  >                        |
+-----------------------------------------------------------+
```

- Cards sit right-of-centre, vertically centred, clamped/overlapping horizontally rather than spread out in a row.
- The current card is on top: full size, ochre/light ring, full opacity. Neighbours sit behind it on either side, slightly smaller, dimmer, and partly tucked under the active card.
- Cards outside the immediate neighbours fade out.
- The main background photo flips automatically every 4 seconds, and the deck shifts sideways with it so the new card slides to the top of the stack.
- Clicking a card, an arrow, a dot, or swiping still jumps to that slide and restarts the 4s timer.
- Arrows and dots move to sit under the headline/CTA area instead of under the old rail.

## Auto-play note

Your brand rules said "no auto-playing carousels" — this request overrides that for the hero only. It will pause on hover/focus and respect reduced-motion (no auto-advance for those users), so it stays accessible.

## Responsive

- Desktop/large tablet: deck on the right as described.
- Small screens: no room beside the headline, so the deck sits below the copy as a compact overlapping stack, centred, with the same 4s flip and 44x44px tap targets.

## Technical notes

- Only `src/components/HeroCarousel.tsx` changes: replace the scroll-snap rail with an absolutely positioned deck using `translateX(position * offset) scale(...)` and z-index by distance, transitions 400ms ease-out.
- Add a 4s interval with pause-on-hover/focus and reset-on-interaction; skip the interval when `prefers-reduced-motion` is set.
- No data, route, or backend changes.