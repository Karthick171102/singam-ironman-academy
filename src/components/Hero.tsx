import { ArrowDown, MapPin, Play } from "lucide-react";
import { LinkButton, LionMark, TrackGraphic } from "./ui";
import { BlurFade, DotPattern, NumberTicker, Spotlight } from "./effects";
import { useSite } from "../lib/preferences";

export function Hero({ onJoin }: { onJoin: () => void }) {
  const { c, lang } = useSite();

  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col justify-end overflow-hidden bg-surface pt-32 md:pt-40"
    >
      {/* Atmosphere */}
      <Spotlight className="-top-40 left-[-10%] md:-top-20 md:left-[10%]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_82%_-5%,var(--hero-glow),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_100%,var(--hero-ember),transparent_60%)]" />
        <div className="grid-lines absolute inset-0 opacity-70" />
        <DotPattern className="opacity-[0.22] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
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
          <BlurFade delay={0} duration={0.55} inView={false}>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-accent shadow-[0_0_0_1px_rgba(239,106,77,0.06)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {c.hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-fg/45">
                <MapPin className="h-3 w-3" />
                {c.hero.location}
              </span>
            </div>
          </BlurFade>

          <h1 className="heading text-[15.5vw] leading-[0.85] text-fg sm:text-[13vw] md:text-[9.5rem] lg:text-[8.2rem] xl:text-[9.6rem]">
            <BlurFade delay={60} duration={0.7} inView={false} yOffset={18} blur="8px">
              <span className="block">{c.hero.line1}</span>
            </BlurFade>
            <BlurFade delay={140} duration={0.7} inView={false} yOffset={18} blur="8px">
              <span className="block">{c.hero.line2}</span>
            </BlurFade>
            <BlurFade delay={220} duration={0.7} inView={false} yOffset={18} blur="8px">
              <span className="block">
                {c.hero.line3Pre}{" "}
                <span className="relative inline-block text-accent">
                  <span className="bg-[linear-gradient(110deg,var(--color-accent)_0%,var(--color-accent-strong)_35%,#ffb39f_50%,var(--color-accent)_65%,var(--color-accent-strong)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-text-shimmer">
                    {c.hero.line3Accent}
                  </span>
                </span>
                <span className="text-accent">.</span>
              </span>
            </BlurFade>
          </h1>

          <BlurFade delay={320} duration={0.65} inView={false}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-fg/65 md:text-base">
              {c.hero.bodyBefore}
              <span className="font-medium text-fg">{c.hero.bodyName}</span>
              {c.hero.bodyAfter}
            </p>
          </BlurFade>

          <BlurFade delay={420} duration={0.65} inView={false}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={onJoin}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-7 py-4 text-[11px] font-bold tracking-[0.16em] uppercase text-on-accent shadow-[0_0_0_1px_rgba(239,106,77,0.2),0_18px_40px_-20px_var(--color-accent)] transition-all hover:bg-accent-strong hover:shadow-[0_0_0_1px_rgba(239,106,77,0.35),0_22px_45px_-18px_var(--color-accent)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.28),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
                {c.hero.ctaJoin}
                <ArrowDown className="relative h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <LinkButton
                href="#updates"
                variant="outline"
                className="py-4 backdrop-blur-sm"
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
          </BlurFade>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {c.stats.map((s, i) => (
            <BlurFade
              key={s.label}
              delay={520 + i * 70}
              inView={false}
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
                <NumberTicker value={s.value} />
              </p>
              <p className="mt-1.5 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-fg/70">
                {s.label}
              </p>
              <p className="mt-0.5 text-[10px] text-fg/50">{s.note}</p>
            </BlurFade>
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
          <LionMark className="h-12 w-12 text-accent/60" />
        </div>
      </div>
    </section>
  );
}
