import { Moon, Sun } from "lucide-react";
import { useSite, type Theme } from "../lib/preferences";
import { cn } from "./ui";
import type { Lang } from "../data/site";

const langs: Array<{ id: Lang; short: string; full: string }> = [
  { id: "en", short: "EN", full: "English" },
  { id: "ta", short: "த", full: "தமிழ்" },
];

export function LangToggle({
  className,
  wide = false,
}: {
  className?: string;
  wide?: boolean;
}) {
  const { lang, setLang, c } = useSite();

  return (
    <div
      role="group"
      aria-label={c.meta.language}
      className={cn(
        "inline-flex items-center rounded-full border border-line p-0.5",
        className,
      )}
    >
      {langs.map((l) => {
        const active = lang === l.id;
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLang(l.id)}
            aria-pressed={active}
            title={l.full}
            className={cn(
              "rounded-full font-bold transition-colors duration-200",
              wide
                ? "px-4 py-2 text-[11px] tracking-[0.04em]"
                : "px-3 py-1.5 text-[10px] tracking-[0.08em]",
              active
                ? "bg-fg text-surface"
                : "text-fg/55 hover:text-fg",
            )}
          >
            {wide ? l.full : l.short}
          </button>
        );
      })}
    </div>
  );
}

/** Single compact button for narrow headers: shows the language you can switch to. */
export function CompactLangToggle({ className }: { className?: string }) {
  const { lang, toggleLang, c } = useSite();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={c.meta.switchLang}
      title={c.meta.switchLang}
      className={cn(
        "grid h-10 min-w-10 place-items-center rounded-full border border-line px-2.5 text-[11px] font-bold text-fg/75 transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {lang === "en" ? "த" : "EN"}
    </button>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, c } = useSite();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? c.meta.themeLight : c.meta.themeDark}
      title={isDark ? c.meta.themeLight : c.meta.themeDark}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-line text-fg/70 transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.8} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.8} />
      )}
    </button>
  );
}

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme, c } = useSite();

  const options: Array<{ id: Theme; label: string; Icon: typeof Sun }> = [
    { id: "light", label: c.meta.light, Icon: Sun },
    { id: "dark", label: c.meta.dark, Icon: Moon },
  ];

  return (
    <div
      role="group"
      aria-label={c.meta.theme}
      className={cn(
        "inline-flex items-center rounded-full border border-line p-0.5",
        className,
      )}
    >
      {options.map(({ id, label, Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setTheme(id)}
            aria-pressed={active}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold transition-colors",
              active
                ? "bg-fg text-surface"
                : "text-fg/55 hover:text-fg",
            )}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
