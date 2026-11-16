import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "./ui";
import { LionMark } from "./ui";
import { useSite } from "../lib/preferences";
import {
  CompactLangToggle,
  LangToggle,
  ThemeSwitch,
  ThemeToggle,
} from "./Toggles";

export function Nav({ onJoin }: { onJoin: () => void }) {
  const { c, socials } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-surface/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-3 px-5 md:h-20 md:px-8 lg:px-12">
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${c.meta.brandTop} ${c.meta.brandSub} — ${c.meta.skip}`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/40 text-accent transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
              <LionMark className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span className="brand-word block text-[17px] font-extrabold tracking-[0.16em] text-fg">
                {c.meta.brandTop}
              </span>
              <span className="brand-sub mt-1 block text-[8.5px] font-semibold tracking-[0.3em] text-fg/50">
                {c.meta.brandSub}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {c.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold tracking-[0.16em] uppercase text-fg/65 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <LangToggle className="hidden sm:inline-flex" />
            <CompactLangToggle className="sm:hidden" />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={onJoin}
              className="ml-1 hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-[10.5px] font-bold tracking-[0.16em] uppercase text-ink transition-colors hover:bg-fg hover:text-surface sm:inline-flex"
            >
              {c.joinCta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={c.meta.openMenu}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-60 flex flex-col bg-surface text-fg transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-18 items-center justify-between px-5 md:h-20 md:px-8">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-accent">
            {c.meta.menu}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={c.meta.closeMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-4"
          aria-label="Mobile"
        >
          {c.nav.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-line py-4"
            >
              <span className="font-mono text-[10px] text-accent/60">
                0{i + 1}
              </span>
              <span className="heading text-3xl text-fg transition-colors group-hover:text-accent sm:text-4xl">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="space-y-4 border-t border-line px-6 py-7">
          <div className="flex flex-wrap items-center gap-2.5">
            <LangToggle wide />
            <ThemeSwitch />
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-full bg-gold px-6 py-4 text-[11px] font-bold tracking-[0.16em] uppercase text-ink"
          >
            {c.joinCta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium tracking-[0.18em] uppercase text-fg/45">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
