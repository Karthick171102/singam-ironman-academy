import {
  ArrowUpRight,
  Check,
  Dumbbell,
  Flower2,
  Footprints,
  HeartPulse,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionLabel } from "./ui";
import { useSite } from "../lib/preferences";
import type { ProgrammeIcon } from "../data/site";

const icons: Record<ProgrammeIcon, LucideIcon> = {
  footprints: Footprints,
  timer: Timer,
  dumbbell: Dumbbell,
  "heart-pulse": HeartPulse,
  stretch: Flower2,
  users: Users,
};

export function Programmes() {
  const { c } = useSite();

  return (
    <section
      id="programmes"
      className="relative overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="03" tone="ink">
              {c.programmes.label}
            </SectionLabel>
            <h2 className="heading mt-6 max-w-[18ch] text-[2.75rem] leading-[0.92] text-fg sm:text-6xl lg:text-[4.4rem]">
              {c.programmes.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-[15px] leading-relaxed text-fg/55">
              {c.programmes.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.programmes.items.map((p, i) => {
            const Icon = icons[p.icon] ?? Footprints;
            const featured = "featured" in p && p.featured;
            return (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <article
                  className={
                    featured
                      ? "group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-inverse p-7 text-inverse-fg"
                      : "group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)]"
                  }
                >
                  {featured && (
                    <>
                      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-inverse-accent/10 blur-2xl" />
                      <span className="absolute top-6 right-6 rounded-full bg-inverse-accent px-2.5 py-1 text-[8.5px] font-bold tracking-[0.16em] uppercase text-inverse-fg">
                        {c.programmes.featured}
                      </span>
                    </>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={
                        featured
                          ? "grid h-11 w-11 place-items-center rounded-full border border-inverse-accent/35 bg-inverse-accent/10 text-inverse-accent"
                          : "grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2 text-fg/70 transition-colors group-hover:border-accent/60 group-hover:text-accent"
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span
                      className={
                        featured
                          ? "font-mono text-[10px] text-inverse-fg/25"
                          : "font-mono text-[10px] text-fg/25"
                      }
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? "mt-2.5 text-[13px] leading-relaxed text-inverse-fg/55"
                        : "mt-2.5 text-[13px] leading-relaxed text-fg/55"
                    }
                  >
                    {p.summary}
                  </p>

                  <ul
                    className={
                      featured
                        ? "mt-5 space-y-2 border-t border-inverse-fg/10 pt-5"
                        : "mt-5 space-y-2 border-t border-line pt-5"
                    }
                  >
                    {p.points.map((point) => (
                      <li
                        key={point}
                        className={
                          featured
                            ? "flex items-center gap-2.5 text-[11.5px] text-inverse-fg/65"
                            : "flex items-center gap-2.5 text-[11.5px] text-fg/60"
                        }
                      >
                        <Check
                          className={
                            featured
                              ? "h-3.5 w-3.5 shrink-0 text-inverse-accent"
                              : "h-3.5 w-3.5 shrink-0 text-accent"
                          }
                          strokeWidth={2.4}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={
                      featured
                        ? "mt-auto flex items-center justify-between gap-3 pt-7 text-[10px] font-bold tracking-[0.18em] uppercase text-inverse-accent"
                        : "mt-auto flex items-center justify-between gap-3 pt-7 text-[10px] font-bold tracking-[0.18em] uppercase text-fg/45 transition-colors group-hover:text-fg"
                    }
                  >
                    {c.programmes.enquire}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] tracking-[0.04em] text-fg/45">
            <span className="inline-block h-1 w-1 rounded-full bg-accent" />
            {c.programmes.note}
            <a
              href="#contact"
              className="font-semibold text-fg/65 underline decoration-fg/20 underline-offset-4 hover:text-fg"
            >
              {c.programmes.askLink}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
