import {
  ArrowUpRight,
  BadgeCheck,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn, LionMark, Reveal, SectionLabel, TrackGraphic } from "./ui";
import { useSite } from "../lib/preferences";
import type { CredentialIcon } from "../data/site";

const credentialIcons: Record<CredentialIcon, LucideIcon> = {
  founder: BadgeCheck,
  creator: Users,
  graduate: GraduationCap,
};

export function About() {
  const { c, lang, socials } = useSite();
  const [bodyFirst, bodySecond] = c.about.body;
  const strongParts = bodySecond.split(c.about.bodyStrong);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 hidden h-96 w-96 rounded-full border border-line md:block" />
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Athlete card */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-inverse p-7 text-inverse-fg shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] md:p-9">
                <TrackGraphic
                  className="pointer-events-none absolute -top-10 -right-16 w-[420px] rotate-12 text-inverse-fg/15"
                  animate={false}
                />

                <div className="relative flex items-center justify-between gap-3 text-[9px] font-semibold tracking-[0.24em] uppercase text-inverse-fg/45">
                  <span>{c.about.cardFooter}</span>
                  <span>{c.about.cardEst}</span>
                </div>

                <div className="relative mt-10 flex justify-center">
                  <div className="relative grid h-36 w-36 place-items-center rounded-full border border-inverse-accent/30">
                    <div className="absolute inset-3 rounded-full border border-dashed border-inverse-accent/25" />
                    <LionMark className="h-16 w-16 text-inverse-accent" />
                  </div>
                </div>

                <div className="relative mt-10">
                  <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-inverse-accent">
                    {c.about.cardRole}
                  </p>
                  <h3 className="heading mt-3 text-4xl md:text-5xl">
                    {c.about.cardName}
                  </h3>
                  <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-inverse-fg/55">
                    {c.about.cardBlurb}
                  </p>
                </div>

                <div className="relative mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-inverse-fg/10 pt-5">
                  <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-inverse-fg/50">
                    {c.about.cardLocation}
                  </span>
                  <span className="rounded-full border border-inverse-accent/35 px-3 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase text-inverse-accent">
                    {c.about.cardChip}
                  </span>
                </div>
              </div>

              {/* caption under card */}
              <p className="mt-4 px-2 text-[10px] leading-relaxed tracking-[0.06em] text-fg/50">
                {c.about.caption}
              </p>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="01" tone="ink">
                {c.about.label}
              </SectionLabel>
              <h2 className="heading mt-6 max-w-[18ch] text-[2.75rem] leading-[0.92] text-fg sm:text-6xl lg:text-[4.4rem]">
                {c.about.title}
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <blockquote
                className={cn(
                  "mt-9 border-l-2 border-accent pl-5 text-[1.45rem] leading-snug text-fg/80 md:text-[1.7rem]",
                  lang === "ta" ? "font-tamil not-italic" : "font-serif italic",
                )}
              >
                &ldquo;{c.about.quote}&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg/65">
                <p>{bodyFirst}</p>
                <p>
                  {strongParts[0]}
                  <span className="font-medium text-fg">
                    {c.about.bodyStrong}
                  </span>
                  {strongParts[1] ?? ""}
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {c.about.credentials.map((item, i) => {
                const Icon = credentialIcons[item.icon] ?? BadgeCheck;
                return (
                  <Reveal
                    key={item.title}
                    delay={180 + i * 70}
                    className="bg-card p-5"
                  >
                    <Icon
                      className="h-4.5 w-4.5 text-accent"
                      strokeWidth={1.8}
                    />
                    <p className="mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-fg">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-fg/50">
                      {item.detail}
                    </p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <span className="mr-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-fg/40">
                  {c.about.follow}
                </span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase text-fg transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    {s.label}
                    <span className="text-fg/40 transition-colors group-hover:text-ink/60">
                      {s.followers}
                    </span>
                    <ArrowUpRight className="h-3 w-3 opacity-40 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
