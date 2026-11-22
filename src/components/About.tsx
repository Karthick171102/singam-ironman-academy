import {
  ArrowUpRight,
  BadgeCheck,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn, Img, BrandMark, Reveal, SectionLabel } from "./ui";
import ReflectiveCard from "./ReflectiveCard";
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
              <div className="aspect-[4/5] w-full">
                <ReflectiveCard
                  theme="dark"
                  width="100%"
                  height="100%"
                  radius={28}
                  tint="#f2e8df"
                  metalness={0.95}
                  roughness={0.28}
                  blurStrength={5}
                  grayscale={0.25}
                  shine={1.1}
                  glare={0.55}
                  className="h-full w-full"
                  style={{ "--rc-pad": "0px" } as any}
                >
                  <div className="absolute inset-0">
                    <Img
                      src="/founder/siva-balan-portrait.jpg"
                      alt={`${c.about.cardName} — ${c.about.cardRole}`}
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover object-[50%_32%] opacity-[0.72] mix-blend-luminosity"
                      fallbackLabel={c.about.cardName}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,12,0.92)_0%,rgba(11,13,12,0.45)_38%,rgba(11,13,12,0.12)_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(80%_45%_at_50%_10%,rgba(239,106,77,0.16),transparent_70%)]" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3 text-[9px] font-semibold tracking-[0.24em] uppercase text-white/75">
                      <span>{c.about.cardFooter}</span>
                      <span>{c.about.cardEst}</span>
                    </div>

                    <div className="mt-auto">
                      <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-media-accent">
                        {c.about.cardRole}
                      </p>
                      <div className="mt-2.5 flex items-end justify-between gap-4">
                        <h3 className="heading text-4xl text-white md:text-5xl">
                          {c.about.cardName}
                        </h3>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-black/25 text-media-accent backdrop-blur-md">
                          <BrandMark className="h-5 w-auto" />
                        </span>
                      </div>

                      <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-white/72">
                        {c.about.cardBlurb}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-4">
                        <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-white/55">
                          {c.about.cardLocation}
                        </span>
                        <span className="rounded-full border border-inverse-accent/35 px-3 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase text-inverse-accent">
                          {c.about.cardChip}
                        </span>
                      </div>
                    </div>
                  </div>
                </ReflectiveCard>
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
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase text-fg transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
                  >
                    {s.label}
                    <span className="text-fg/40 transition-colors group-hover:text-on-accent/70">
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
