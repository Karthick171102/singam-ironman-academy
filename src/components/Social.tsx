import { ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import { Img, Reveal, SectionLabel } from "./ui";
import { useSite } from "../lib/preferences";

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  threads: null,
};

export function Social() {
  const { c, socials } = useSite();

  return (
    <section
      id="follow"
      className="grain relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="06">{c.social.label}</SectionLabel>
              <h2 className="heading mt-6 text-[2.75rem] leading-[0.92] text-fg sm:text-6xl lg:text-[4.2rem]">
                {c.social.titleLine1}
                <br />
                {c.social.titleLine2}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg/55">
                {c.social.body}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.youtube.com/@SivabalanSingam"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-inverse px-6 py-3.5 text-[10.5px] font-bold tracking-[0.16em] uppercase text-inverse-fg transition-colors hover:bg-gold hover:text-ink"
                >
                  <Youtube className="h-4 w-4" />
                  {c.social.subscribe}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://www.instagram.com/sivabalan_singam/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3.5 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-fg/75 transition-colors hover:border-accent hover:text-accent"
                >
                  <Instagram className="h-4 w-4" />
                  {c.social.instagram}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-7">
            <a
              href="https://www.youtube.com/@SivabalanSingam"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-[1.75rem] border border-line"
            >
              <Img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80"
                alt={c.gallery.items[1]?.alt ?? c.social.videoTitle}
                wrapperClassName="aspect-[16/10] w-full"
                className="transition-transform duration-[900ms] group-hover:scale-[1.04]"
                fallbackLabel={c.social.videoTitle}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,8,7,0.9),rgba(6,8,7,0.1)_60%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-gold/40" />
                  <Play className="relative ml-1 h-6 w-6 fill-current" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-gold">
                    {c.social.watch}
                  </p>
                  <p className="heading mt-2 max-w-[22ch] text-2xl text-white md:text-3xl">
                    {c.social.videoTitle}
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-full border border-white/25 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] uppercase text-white/70 backdrop-blur-md sm:block">
                  {c.social.youtube}
                </span>
              </div>
            </a>
          </Reveal>
        </div>

        {/* social rows */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.4rem] border border-line bg-line sm:grid-cols-3">
          {socials.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.label} delay={i * 70}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-center justify-between gap-4 bg-surface-2 px-6 py-6 transition-colors hover:bg-card"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg/60 transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      {Icon ? (
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                      ) : (
                        <span className="text-[13px] font-semibold">@</span>
                      )}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-fg">
                        {s.label}
                      </p>
                      <p className="mt-0.5 text-[10.5px] text-fg/50">
                        {s.handle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="heading text-xl text-accent">
                      {s.followers}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-fg/25 transition-colors group-hover:text-accent" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
