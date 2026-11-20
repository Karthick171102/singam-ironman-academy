import { ArrowUpRight, Instagram } from "lucide-react";
import { Img, Reveal, SectionLabel } from "./ui";
import { HoverGlow } from "./effects";
import { useSite } from "../lib/preferences";

export function Gallery() {
  const { c } = useSite();

  return (
    <section
      id="updates"
      className="relative overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="05" tone="ink">
              {c.gallery.label}
            </SectionLabel>
            <h2 className="heading mt-6 max-w-[16ch] text-[2.75rem] leading-[0.92] text-fg sm:text-6xl lg:text-[4.4rem]">
              {c.gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="max-w-sm">
              <p className="text-[15px] leading-relaxed text-fg/55">
                {c.gallery.intro}
              </p>
              <a
                href="https://www.instagram.com/sivabalan_singam/"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.16em] uppercase text-fg/60 transition-colors hover:text-accent"
              >
                <Instagram className="h-3.5 w-3.5" />
                {c.gallery.follow}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[280px] gap-4 md:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3">
          {c.gallery.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 60}
              className={i === 0 ? "md:col-span-2 lg:row-span-2" : ""}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full min-h-[280px] overflow-hidden rounded-[1.4rem] bg-surface"
              >
                <HoverGlow color="var(--color-media-accent)" className="z-[2] mix-blend-screen" />
                <div className="absolute inset-0">
                  <Img
                    src={item.image}
                    alt={item.alt}
                    wrapperClassName="h-full w-full"
                    className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                    fallbackLabel={`${item.date} — ${c.about.caption}`}
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,8,7,0.92)_0%,rgba(6,8,7,0.35)_45%,rgba(6,8,7,0.06)_75%)]" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] uppercase text-white/80 backdrop-blur-md">
                      {item.date}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 transition-colors group-hover:border-media-accent group-hover:bg-media-accent group-hover:text-on-media-accent">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div>
                    <h3
                      className={
                        i === 0
                          ? "heading max-w-[16ch] text-3xl text-white md:text-4xl"
                          : "text-[17px] font-semibold tracking-tight text-white"
                      }
                    >
                      {item.title}
                    </h3>
                    <p
                      className={
                        i === 0
                          ? "mt-2.5 max-w-md text-[12.5px] leading-relaxed text-white/70"
                          : "mt-2 hidden max-w-sm text-[12px] leading-relaxed text-white/65 sm:block"
                      }
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <a
              href="https://www.instagram.com/sivabalan_singam/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-line bg-inverse p-6 text-inverse-fg transition-colors hover:border-inverse-accent/50"
            >
              <HoverGlow color="var(--color-inverse-accent)" />
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-inverse-accent/35 text-inverse-accent">
                  <Instagram className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-inverse-fg/30 transition-colors group-hover:text-inverse-accent" />
              </div>
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-inverse-accent">
                  @sivabalan_singam
                </p>
                <p className="heading mt-2 text-2xl leading-tight">
                  {c.gallery.ctaTitle}
                </p>
                <p className="mt-2 text-[11.5px] leading-relaxed text-inverse-fg/45">
                  {c.gallery.ctaBody}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-6 text-[10.5px] tracking-[0.04em] text-fg/55">
            {c.gallery.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
