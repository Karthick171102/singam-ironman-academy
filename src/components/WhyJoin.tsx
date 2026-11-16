import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LinkButton, Reveal, SectionLabel } from "./ui";
import { useSite } from "../lib/preferences";

export function WhyJoin() {
  const { c } = useSite();

  return (
    <section
      id="why"
      className="grain relative overflow-hidden bg-inverse py-24 text-inverse-fg md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_100%_100%,var(--hero-ember),transparent_60%)]" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionLabel index="04" tone="inverse">
                  {c.why.label}
                </SectionLabel>
                <h2 className="heading mt-6 text-[2.75rem] leading-[0.92] sm:text-6xl lg:text-[4.2rem]">
                  {c.why.titleLine1}
                  <br />
                  {c.why.titleLine2}
                  <span className="text-gold">.</span>
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-inverse-fg/55">
                  {c.why.body}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <LinkButton href="#contact" variant="contrast">
                    {c.why.ctaJoin}
                  </LinkButton>
                  <a
                    href="https://www.instagram.com/sivabalan_singam/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-inverse-fg/55 transition-colors hover:text-inverse-accent"
                  >
                    {c.why.ctaAsk}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-4 border-t border-inverse-fg/10 pt-6">
                  <span className="heading text-4xl text-inverse-accent">
                    {c.why.foundedValue}
                  </span>
                  <p className="text-[10.5px] leading-relaxed tracking-[0.06em] uppercase text-inverse-fg/45">
                    {c.why.foundedLabel}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-[1.4rem] border border-inverse-fg/10 bg-inverse-fg/10 sm:grid-cols-2">
              {c.why.items.map((b, i) => (
                <Reveal key={b.title} delay={(i % 2) * 60}>
                  <div className="group h-full bg-inverse p-6 transition-colors duration-300 hover:bg-inverse-fg/5 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[10px] text-inverse-accent/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-inverse-accent/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-inverse-accent/80" />
                    </div>
                    <h3 className="mt-5 text-[16px] font-semibold tracking-tight text-inverse-fg">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-inverse-fg/50">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[1.4rem] border border-inverse-accent/25 bg-inverse-accent/8 px-6 py-5 sm:flex-row sm:items-center">
                <p className="text-[12.5px] leading-relaxed text-inverse-fg/70">
                  <span className="font-semibold text-inverse-accent">
                    {c.why.unsure}
                  </span>{" "}
                  {c.why.unsureBody}
                </p>
                <a
                  href="#contact"
                  className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase text-inverse-accent"
                >
                  {c.why.startHere}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
