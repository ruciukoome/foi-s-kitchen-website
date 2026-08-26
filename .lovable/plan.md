# Foi's Kitchen — Website Build

A 10-page, mobile-first site for Foi's Kitchen: catering, meal prep and online food orders. Frontend only in this phase — the cart, quote form and contact form all finish on WhatsApp (+254 758 996 440). AI-generated warm food photography stands in for real photos and is easy to swap later.

## Design system

- Colours: charcoal-brown #3B2A20 (text/nav), ochre #C97B3D (CTAs, prices, active states), cream #F4EFE9 (page background), white (cards), sage #7C8B6B (health/meal-prep tags), WhatsApp green #25D366 (WhatsApp elements only).
- Fonts: Poppins for headings/nav/logo, Lato for body. Loaded via Google Fonts link in the root route.
- Type scale, 80–120px section spacing, 1280px max width, 4:5 food card imagery, outline icons in ochre or charcoal only.
- Motion: 200–450ms ease-out only — hero fade-up with stagger, one-time scroll reveals, card stagger on category change, 1.04 image hover, button scale/deepen, sliding tab pill, toast on add-to-order. No carousels, parallax or particles.

## Navigation

Sticky header: Logo · Home · About · Services (dropdown: Corporate Catering, Weddings & Private Events, Meal Prep Plans) · Menu · Order Now (ochre button dropdown: Order Online, Request a Quotation) · Gallery & Reviews · Contact.
Mobile: hamburger drawer plus a sticky bottom Order Now bar. Floating WhatsApp button bottom-right on every page and breakpoint, opening a pre-filled wa.me chat.

## Pages

1. Home — hero with rotating (non-autoplay, manual/dot-controlled) food imagery, headline, Order Now CTA; three feature icons; featured menu categories; Order → Confirm → Prepare → Deliver strip; testimonials; footer CTA.
2. About — founder story, values, kitchen/hygiene photos, key numbers.
3. Corporate Catering — package tiers, sample menus, MOQ, menu PDF link, Request a Quote.
4. Weddings & Private Events — past-event gallery, packages, lead-time note, enquiry form.
5. Meal Prep Plans — image-led plan cards with price in title, inclusions checklist, dietary tags, Order Plan.
6. Menu Catalogue — sliding category tabs (Breakfast, Mains, Sides, Drinks, Desserts), search, dietary filters, 2/3/4-column card grid with Add to Order.
7. Order Online — cart review → delivery/pickup details → checkout → confirmation. Checkout builds a pre-filled WhatsApp order message; an M-Pesa STK option is shown as a clearly marked "coming soon" placeholder.
8. Request a Quotation — name, phone, event type, date, guest count, budget, notes; submit opens WhatsApp with the details formatted, plus a mailto fallback.
9. Gallery & Reviews — filterable masonry grid + testimonial cards with rating.
10. Contact — embedded map, phone, email, WhatsApp button, form, business hours.

## Technical notes

- TanStack Start file routes: `index`, `about`, `services.corporate`, `services.weddings`, `services.meal-prep`, `menu`, `order`, `quote`, `gallery`, `contact`. Each leaf gets its own `head()` with unique title/description/OG tags.
- Tokens added to `src/styles.css` under `@theme inline` (`--color-brand-*`), fonts via `<link>` in `__root.tsx`. No hardcoded hex in components.
- Cart state in a small React context persisted to localStorage; no backend.
- Shared components: `SiteHeader`, `MobileNav`, `ServiceDropdown`, `OrderNowButton`, `WhatsAppFloatButton`, `StickyOrderBar`, `MenuCard`, `CategoryTabs`, `PlanCard`, `TestimonialCard`, `GalleryGrid`, `SectionReveal`, `QuoteForm`, `ContactForm`, `SiteFooter`.
- Menu items, plans, testimonials and gallery entries live in `src/data/*.ts` as clearly marked [PLACEHOLDER] content.
- Generated food/event imagery in `src/assets/`, imported as ES modules so Vite emits compressed responsive files.
- Favicon left as-is until you send it.

## Later (not in this phase)

M-Pesa STK push, order/quote persistence and an admin view — these need Lovable Cloud plus Daraja credentials.
