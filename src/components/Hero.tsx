import { ArrowDown, MapPin, Play } from "lucide-react";
import { LinkButton, LionMark, Reveal, TrackGraphic } from "./ui";
import { useSite } from "../lib/preferences";

export function Hero({ onJoin }: { onJoin: () => void }) {
  const { c, lang } = useSite();

  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col justify-end overflow-hidden bg-surface pt-32 md:pt-40"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_82%_-5%,var(--hero-glow),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_100%,var(--hero-ember),transparent_60%)]" />
        <div className="grid-lines absolute inset-0 opacity-70" />
        <TrackGraphic className="absolute -right-[16%] top-[14%] hidden w-[820px] rotate-[6deg] text-fg/25 lg:block xl:-right-[8%] xl:w-[900px]" />
      </div>

      {/* side rail */}
      <div className="pointer-events-none absolute top-1/2 left-8 hidden -translate-y-1/2 2xl:block">
        <p className="rotate-180 text-[9px] font-semibold tracking-[0.42em] uppercase text-fg/30 [writing-mode:vertical-rl]">
          {c.hero.rail}
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                {c.hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-fg/45">
                <MapPin className="h-3 w-3" />
                {c.hero.location}
              </span>
            </div>
          </Reveal>

          <h1 className="heading text-[15.5vw] leading-[0.85] text-fg sm:text-[13vw] md:text-[9.5rem] lg:text-[8.2rem] xl:text-[9.6rem]">
            <Reveal delay={40}>
              <span className="block">{c.hero.line1}</span>
            </Reveal>
            <Reveal delay={120}>
              <span className="block">{c.hero.line2}</span>
            </Reveal>
            <Reveal delay={200}>
              <span className="block">
                {c.hero.line3Pre}{" "}
                <span className="text-accent">{c.hero.line3Accent}</span>
                <span className="text-accent">.</span>
              </span>
            </Reveal>
          </h1>

          <Reveal delay={300}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-fg/65 md:text-base">
              {c.hero.bodyBefore}
              <span className="font-medium text-fg">{c.hero.bodyName}</span>
              {c.hero.bodyAfter}
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={onJoin}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-4 text-[11px] font-bold tracking-[0.16em] uppercase text-ink transition-colors hover:bg-fg hover:text-surface"
              >
                {c.hero.ctaJoin}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <LinkButton
                href="#updates"
                variant="outline"
                className="py-4"
                icon={false}
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                {c.hero.ctaWatch}
              </LinkButton>
              <a
                href="#village"
                className="group ml-1 hidden items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-fg/50 transition-colors hover:text-accent sm:inline-flex"
              >
                {c.hero.ctaVisit}
                <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {c.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={420 + i * 70}
              className={
                i === 0
                  ? "border-line py-5 pr-4 md:border-r md:py-7"
                  : i === 1
                    ? "border-l border-line py-5 pl-4 md:border-r md:py-7 md:pl-6"
                    : i === 2
                      ? "border-t border-line py-5 pr-4 md:border-t-0 md:border-r md:py-7 md:pl-6"
                      : "border-t border-l border-line py-5 pl-4 md:border-t-0 md:py-7 md:pl-6"
              }
            >
              <p className="heading text-3xl text-accent md:text-[2.4rem]">
                {s.value}
              </p>
              <p className="mt-1.5 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-fg/70">
                {s.label}
              </p>
              <p className="mt-0.5 text-[10px] text-fg/50">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* rotating stamp */}
      <div className="pointer-events-none absolute top-28 right-8 hidden xl:block">
        <div className="relative grid h-36 w-36 place-items-center text-fg/40">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 animate-[spin_34s_linear_infinite]"
          >
            <defs>
              <path
                id="stampPath"
                d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
              />
            </defs>
            <text
              fill="currentColor"
              fontSize={lang === "ta" ? "9" : "10.5"}
              letterSpacing={lang === "ta" ? 1.4 : 4.2}
              fontFamily={
                lang === "ta"
                  ? "'Noto Sans Tamil', sans-serif"
                  : "Inter, sans-serif"
              }
              fontWeight="600"
            >
              <textPath href="#stampPath">{c.hero.stamp}</textPath>
            </text>
          </svg>
          <LionMark className="h-10 w-10 text-gold/60" />
        </div>
      </div>
    </section>
  );
}
