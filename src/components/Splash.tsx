import { useEffect, useState } from "react";
import Aurora from "./Aurora";
import { BrandLogo, cn } from "./ui";
import { useSite } from "../lib/preferences";

const HOLD_MS = 1900;
const SHUTTER_MS = 950;
const REDUCED_EXIT_MS = 220;

/**
 * Brand splash shown on first paint: Aurora light rising behind the lockup and
 * a slim progress rail, then the whole panel shutters upward off the screen to
 * reveal the page underneath.
 */
export function Splash({ onDone }: { onDone: () => void }) {
  const { c, lang, theme } = useSite();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const hold = reduced ? 550 : HOLD_MS;
    const start = performance.now();
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    let raf = 0;
    let exitTimer = 0;

    root.style.overflow = "hidden";

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / hold);
      setProgress(Math.round((1 - Math.pow(1 - t, 2.2)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setProgress(100);
      setLeaving(true);
      exitTimer = window.setTimeout(
        onDone,
        reduced ? REDUCED_EXIT_MS : SHUTTER_MS,
      );
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      root.style.overflow = previousOverflow;
    };
  }, [onDone]);

  const dark = theme === "dark";
  const reduced =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const colorStops = dark
    ? ["#ef6a4d", "#dd6230", "#a3301f"]
    : ["#a3301f", "#dd6230", "#ef6a4d"];

  const reducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  return (
    <div
      data-splash
      aria-hidden={leaving || undefined}
      className={cn(
        "fixed inset-0 z-[90] overflow-hidden bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        !leaving && "translate-y-0 opacity-100",
        leaving &&
          (reducedMotion
            ? "pointer-events-none opacity-0 transition-opacity duration-[220ms] ease-out"
            : "pointer-events-none -translate-y-full transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)]"),
      )}
    >
      {/* Aurora curtains, tinted to the site's brick/vermilion palette */}
      <div className="pointer-events-none absolute inset-0">
        <Aurora
          colorStops={colorStops}
          amplitude={1.15}
          blend={0.72}
          height={0.55}
          scale={1.05}
          glow={0.95}
          brightness={dark ? 1.05 : 0.95}
          layers={3}
          speed={0.55}
          direction="bottom"
          intro={false}
          opacity={dark ? 0.88 : 0.85}
          mouseInteraction
          lightMode={!dark}
          paused={reduced}
        />
      </div>

      {/* keeps the lockup readable against the brightest curtains */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          dark
            ? "bg-[radial-gradient(60%_50%_at_50%_44%,rgba(11,13,12,0.86),rgba(11,13,12,0.45)_58%,transparent_80%)]"
            : "bg-[radial-gradient(60%_50%_at_50%_44%,rgba(248,243,233,0.95),rgba(248,243,233,0.52)_58%,transparent_80%)]",
        )}
      />

      {/* Bottom edge: reads as a shutter blade as it lifts */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px",
          dark ? "bg-accent/55" : "bg-accent/40",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-24",
          dark
            ? "bg-[linear-gradient(to_top,rgba(239,106,77,0.14),transparent)]"
            : "bg-[linear-gradient(to_top,rgba(163,48,31,0.12),transparent)]",
        )}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-[splash-rise_1s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none">
          <BrandLogo lang={lang} className="h-12 w-auto text-fg md:h-16" />
        </div>

        <p
          className="mt-7 text-[9px] font-semibold tracking-[0.42em] uppercase text-fg/45 animate-[splash-rise_1s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none"
          style={{ animationDelay: "120ms" }}
        >
          {c.hero.location}
        </p>

        <div
          role="progressbar"
          aria-label={c.meta.loading}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          className="mt-14 w-[230px] animate-[splash-rise_1s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none md:w-[270px]"
          style={{ animationDelay: "220ms" }}
        >
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-fg/12">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--color-accent-strong),var(--color-accent))] shadow-[0_0_18px_var(--color-accent)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-fg/45">
              {c.meta.loading}
            </span>
            <span className="font-mono text-[10px] tabular-nums text-fg/55">
              {String(progress).padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
