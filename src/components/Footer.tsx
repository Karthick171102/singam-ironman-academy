import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Youtube,
} from "lucide-react";
import { LionMark } from "./ui";
import { useSite } from "../lib/preferences";

export function Footer() {
  const { c, contact, socials } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-inverse-fg/10 bg-inverse text-inverse-fg">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold">
                <LionMark className="h-6 w-6" />
              </span>
              <div>
                <p className="brand-word text-[17px] font-extrabold tracking-[0.16em]">
                  {c.meta.brandTop}
                </p>
                <p className="brand-sub mt-1 text-[8.5px] font-semibold tracking-[0.3em] text-inverse-fg/45">
                  {c.meta.brandSub}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-inverse-fg/50">
              {c.footer.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-inverse-fg/15 text-inverse-fg/55 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.icon === "instagram" ? (
                    <Instagram className="h-4 w-4" strokeWidth={1.7} />
                  ) : s.icon === "youtube" ? (
                    <Youtube className="h-4 w-4" strokeWidth={1.7} />
                  ) : (
                    <span className="text-[12px] font-semibold">@</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gold/70">
                {c.footer.explore}
              </p>
              <ul className="mt-5 space-y-3">
                {c.nav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[12.5px] text-inverse-fg/55 transition-colors hover:text-inverse-fg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gold/70">
                {c.footer.academy}
              </p>
              <ul className="mt-5 space-y-3 text-[12.5px] text-inverse-fg/55">
                <li>
                  <a href="#programmes" className="hover:text-inverse-fg">
                    {c.footer.links.programmes}
                  </a>
                </li>
                <li>
                  <a href="#programmes" className="hover:text-inverse-fg">
                    {c.footer.links.marathon}
                  </a>
                </li>
                <li>
                  <a href="#village" className="hover:text-inverse-fg">
                    {c.footer.links.track}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-inverse-fg">
                    {c.footer.links.visit}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-inverse-fg">
                    {c.footer.links.faq}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gold/70">
                {c.footer.visit}
              </p>
              <p className="mt-5 text-[12.5px] leading-relaxed text-inverse-fg/55">
                {c.contact.address}
              </p>
              <p className="mt-3 text-[12.5px] text-inverse-fg/60">
                {c.contact.hours}
              </p>
              <a
                href="https://www.instagram.com/sivabalan_singam/"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] uppercase text-gold"
              >
                {c.footer.enquire}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-inverse-fg/10 pt-7 text-[10.5px] leading-relaxed text-inverse-fg/35 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-2">
            <p>{c.footer.copyright(year)}</p>
            <p className="text-inverse-fg/45">{c.footer.disclaimer}</p>
            {!contact.phone && (
              <p className="text-inverse-fg/30">{c.contact.pendingNote}</p>
            )}
          </div>
          <a
            href="#top"
            className="group inline-flex shrink-0 items-center gap-2 text-[9.5px] font-semibold tracking-[0.18em] uppercase text-inverse-fg/40 transition-colors hover:text-gold"
          >
            {c.meta.backToTop}
            <span className="grid h-8 w-8 place-items-center rounded-full border border-inverse-fg/15 transition-colors group-hover:border-gold">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
