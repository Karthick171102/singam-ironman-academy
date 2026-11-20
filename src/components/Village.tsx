import { ArrowUpRight, Construction, Flag, MapPin } from "lucide-react";
import { cn, LinkButton, Reveal, SectionLabel, TrackGraphic } from "./ui";
import { useSite } from "../lib/preferences";

export function Village() {
  const { c, lang } = useSite();
  const updated = new Date().toLocaleDateString(
    lang === "ta" ? "ta-IN" : "en-GB",
    { month: "short", year: "numeric" },
  );

  return (
    <section
      id="village"
      className="grain relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_20%_0%,var(--hero-glow),transparent_60%)]" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="02">{c.village.label}</SectionLabel>
              <h2 className="heading mt-6 text-[3rem] leading-[0.9] text-fg sm:text-7xl lg:text-[5.6rem]">
                {c.village.titleTop}
                <br />
                <span className="text-accent">{c.village.titleAccent}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-relaxed text-fg/60">
              {c.village.intro}
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-accent">
              <Construction className="h-3.5 w-3.5" />
              {c.village.status} · {updated}
            </div>
          </Reveal>
        </div>

        {/* body */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* track visual */}
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-[linear-gradient(160deg,var(--color-card)_0%,var(--color-surface)_70%)]">
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

              <div className="relative flex items-center justify-between gap-3 px-6 pt-6 md:px-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-fg/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c.village.trackLabel}
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-fg/30">
                  {c.village.notToScale}
                </span>
              </div>

              <div className="relative mx-auto mt-2 max-w-[560px] px-4">
                <TrackGraphic className="w-full text-fg/70" />
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="heading text-5xl text-fg md:text-6xl">
                      400<span className="text-accent">m</span>
                    </p>
                    <p className="mt-1 text-[9px] font-semibold tracking-[0.32em] uppercase text-fg/40">
                      {c.village.centerSub}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative grid grid-cols-3 divide-x divide-line border-t border-line">
                {c.village.specs.map((item) => (
                  <div key={item.label} className="px-4 py-4 md:px-6">
                    <p className="text-[8.5px] font-semibold tracking-[0.18em] uppercase text-fg/45">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[11.5px] font-medium text-fg/80">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* features */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-line border-t border-line">
              {c.village.features.map((f, i) => (
                <Reveal key={f.n} delay={i * 80}>
                  <div className="group py-6 transition-colors">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-accent/60">
                        {f.n}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-[17px] font-semibold tracking-tight text-fg">
                            {f.title}
                          </h3>
                          <span className="rounded-full border border-line px-2.5 py-1 text-[8.5px] font-semibold tracking-[0.14em] uppercase text-fg/40">
                            {f.status}
                          </span>
                        </div>
                        <p className="mt-2.5 max-w-[46ch] text-[13px] leading-relaxed text-fg/55">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="#updates" variant="solid" className="py-3.5">
                  {c.village.ctaUpdates}
                </LinkButton>
                <LinkButton href="#contact" variant="outline" className="py-3.5">
                  {c.village.ctaVisit}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* vision quote */}
        <Reveal delay={80}>
          <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <p
              className={cn(
                "max-w-2xl text-2xl leading-snug text-fg/75 md:text-[1.75rem]",
                lang === "ta" ? "font-tamil not-italic" : "font-serif italic",
              )}
            >
              &ldquo;{c.village.quote}&rdquo;
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-5 text-[10px] font-semibold tracking-[0.16em] uppercase text-fg/40">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent/80" />
                {c.hero.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Flag className="h-3.5 w-3.5 text-accent/80" />
                {c.village.tagEst}
              </span>
              <ArrowUpRight className="h-4 w-4 text-accent/40" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
