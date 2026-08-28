import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import menuPilau from "@/assets/menu-pilau.jpg";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cardLabel: string;
  cardNote: string;
  image: string;
  to: "/quote" | "/services/meal-prep" | "/order" | "/menu";
  cta: string;
};

const slides: Slide[] = [
  {
    id: "catering",
    eyebrow: "Nairobi · Catering & meal prep",
    title: "Home-style food, cooked fresh and delivered hot.",
    copy: "Catering for weddings, offices and family gatherings — 20 guests or 300.",
    cardLabel: "Catering",
    cardNote: "Events of any size",
    image: hero2,
    to: "/quote",
    cta: "Request a quotation",
  },
  {
    id: "meal-prep",
    eyebrow: "Meal prep plans",
    title: "A week of good food, delivered on one day.",
    copy: "5, 10 or 14 meals prepped fresh and dropped at your door every week.",
    cardLabel: "Meal prep",
    cardNote: "From KSh 4,500",
    image: hero3,
    to: "/services/meal-prep",
    cta: "See the plans",
  },
  {
    id: "order",
    eyebrow: "Order online",
    title: "For the days you'd rather not cook.",
    copy: "Pick your plates, tell us where you are, and we'll bring them hot.",
    cardLabel: "Order today",
    cardNote: "Delivered hot",
    image: menuPilau,
    to: "/order",
    cta: "Order now",
  },
  {
    id: "menu",
    eyebrow: "The menu",
    title: "Pilau, chapatis, samosas and everything in between.",
    copy: "Browse the full kitchen — breakfast, mains, sides and desserts.",
    cardLabel: "The menu",
    cardNote: "Browse everything",
    image: hero1,
    to: "/menu",
    cta: "See the menu",
  },
];

const SWIPE = 50;
const INTERVAL = 4000;
const count = slides.length;

/** Shortest signed distance from active to index, wrapping around. */
function offsetOf(index: number, active: number) {
  let d = index - active;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
}

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const go = useCallback((i: number) => setActive((i + count) % count), []);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const t = window.setInterval(() => setActive((a) => (a + 1) % count), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused, active]);

  const slide = slides[active]!;

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden md:min-h-[92vh]"
      aria-roledescription="carousel"
      aria-label="Foi's Kitchen highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0]!.clientX;
      }}
      onTouchMove={(e) => {
        touchEnd.current = e.targetTouches[0]!.clientX;
      }}
      onTouchEnd={() => {
        if (touchStart.current === null || touchEnd.current === null) return;
        const d = touchStart.current - touchEnd.current;
        if (d > SWIPE) go(active + 1);
        else if (d < -SWIPE) go(active - 1);
      }}
    >
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1008}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[420ms] ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/65" />

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center pt-28 pb-14 md:min-h-[92vh]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div key={slide.id} className="max-w-2xl">
            <p className="label-caps animate-fade-up text-background/80">{slide.eyebrow}</p>
            <h1
              className="animate-fade-up mt-4 font-display text-[2.2rem] leading-[1.1] font-bold text-background sm:text-5xl md:text-[3.3rem]"
              style={{ animationDelay: "100ms" }}
            >
              {slide.title}
            </h1>
            <p
              className="animate-fade-up mt-4 max-w-xl text-base text-background/85 md:text-[17px]"
              style={{ animationDelay: "200ms" }}
            >
              {slide.copy}
            </p>
            <div className="animate-fade-up mt-7 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
              <Link
                to={slide.to}
                className="label-caps inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-primary-foreground transition-all duration-200 ease-out hover:bg-primary-deep hover:scale-[1.02] active:scale-[0.97]"
              >
                {slide.cta}
              </Link>
              <Link
                to="/order"
                className="label-caps inline-flex min-h-[48px] items-center justify-center rounded-full border border-background/40 px-6 text-background transition-all duration-200 ease-out hover:scale-[1.02] hover:border-background active:scale-[0.97]"
              >
                Order online
              </Link>
            </div>

            {/* Controls */}
            <div className="mt-9 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/30 text-background transition-colors duration-200 ease-out hover:border-background"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex gap-1">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="grid h-11 w-8 place-items-center"
                  >
                    <span
                      className={cn(
                        "block h-1.5 rounded-full transition-all duration-300 ease-out",
                        i === active ? "w-8 bg-primary" : "w-4 bg-background/50",
                      )}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/30 text-background transition-colors duration-200 ease-out hover:border-background"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Clamped horizontal card deck */}
          <div className="relative mx-auto h-48 w-full max-w-[460px] sm:h-56">
            {slides.map((s, i) => {
              const pos = offsetOf(i, active);
              const isActive = pos === 0;
              const visible = Math.abs(pos) <= 1;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  tabIndex={visible ? 0 : -1}
                  aria-label={`Show ${s.cardLabel}`}
                  aria-current={isActive}
                  className={cn(
                    "absolute top-1/2 left-1/2 -ml-[6.5rem] overflow-hidden rounded-2xl text-left transition-all duration-[400ms] ease-out sm:-ml-[8rem]",
                    "h-32 w-52 sm:h-40 sm:w-64",
                    isActive
                      ? "shadow-2xl ring-2 ring-primary"
                      : "ring-1 ring-background/30 hover:ring-background/60",
                    !visible && "pointer-events-none",
                  )}
                  style={{
                    transform: `translateY(-50%) translateX(${pos * 52}%) scale(${isActive ? 1 : 0.84})`,
                    opacity: visible ? (isActive ? 1 : 0.65) : 0,
                    zIndex: isActive ? 20 : visible ? 10 : 0,
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.cardLabel}
                    loading="lazy"
                    width={576}
                    height={352}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
                  <span className="absolute inset-x-4 bottom-3 block text-background">
                    <span className="block font-display text-base font-semibold leading-tight">
                      {s.cardLabel}
                    </span>
                    <span className="block text-[13px] text-background/80">{s.cardNote}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
