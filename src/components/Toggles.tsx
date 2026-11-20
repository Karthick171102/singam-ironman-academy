import { useSite, type Theme } from "../lib/preferences";
import { cn } from "./ui";
import type { Lang } from "../data/site";
import { Moon, Sun } from "lucide-react";

const langs: Array<{ id: Lang; short: string; full: string }> = [
  { id: "en", short: "EN", full: "English" },
  { id: "ta", short: "த", full: "தமிழ்" },
];

export function LangToggle({
  className,
  wide = false,
  tone = "surface",
}: {
  className?: string;
  wide?: boolean;
  tone?: "surface" | "inverse";
}) {
  const { lang, setLang, c } = useSite();
  const inverse = tone === "inverse";

  return (
    <div
      role="group"
      aria-label={c.meta.language}
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        inverse ? "border-inverse-fg/20" : "border-line",
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
                ? inverse
                  ? "bg-inverse-fg text-inverse"
                  : "bg-fg text-surface"
                : inverse
                  ? "text-inverse-fg/55 hover:text-inverse-fg"
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

export function ThemeSwitch({
  className,
  tone = "surface",
}: {
  className?: string;
  tone?: "surface" | "inverse";
}) {
  const { theme, setTheme, c } = useSite();
  const inverse = tone === "inverse";

  const options: Array<{ id: Theme; label: string; Icon: typeof Sun }> = [
    { id: "light", label: c.meta.light, Icon: Sun },
    { id: "dark", label: c.meta.dark, Icon: Moon },
  ];

  return (
    <div
      role="group"
      aria-label={c.meta.theme}
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        inverse ? "border-inverse-fg/20" : "border-line",
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
                ? inverse
                  ? "bg-inverse-fg text-inverse"
                  : "bg-fg text-surface"
                : inverse
                  ? "text-inverse-fg/55 hover:text-inverse-fg"
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
