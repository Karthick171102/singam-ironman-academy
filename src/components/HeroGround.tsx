import { TrackGraphic } from "./ui";
import { useSite } from "../lib/preferences";

/**
 * Right-hand first-fold visual: a measured 400 m track plate rather than a
 * portrait, so the opening screen says what the academy is building.
 */
export function HeroGround({ fill = false }: { fill?: boolean }) {
  const { c } = useSite();

  return (
    <div
      className={
        fill
          ? "relative h-full w-full"
          : "relative mx-auto w-full max-w-[420px] lg:max-w-[480px]"
      }
    >
      <div
        className={
          fill
            ? "relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border border-line/70 bg-surface-2 shadow-[0_36px_80px_-40px_rgba(0,0,0,0.6)]"
            : "relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border border-line/70 bg-surface-2 shadow-[0_36px_80px_-40px_rgba(0,0,0,0.6)]"
        }
      >
        {/* blueprint grid */}
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_50%_12%,var(--hero-glow),transparent_62%)]" />

        {/* faint ground photo behind the lanes */}
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=70"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.13] mix-blend-multiply dark:opacity-[0.24] dark:mix-blend-screen"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(11,13,12,0.28),transparent)] dark:bg-[linear-gradient(to_bottom,rgba(11,13,12,0.6),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(11,13,12,0.6),transparent)] dark:bg-[linear-gradient(to_top,rgba(11,13,12,0.82),transparent)]" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[8.5px] font-semibold tracking-[0.26em] uppercase text-fg/55">
          <span>{c.village.trackLabel}</span>
          <span>{c.village.notToScale}</span>
        </div>

        {/* the measured oval */}
        <div className="absolute inset-x-0 top-[16%] bottom-[23%] px-4">
          <TrackGraphic
            className="h-full w-full text-fg/90"
            accent="var(--color-accent)"
          />
        </div>

        {/* centre label */}
        <div className="pointer-events-none absolute top-[41%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-fg/55">
            {c.village.centerSub}
          </p>
          <p className="heading mt-1 text-2xl text-accent md:text-3xl">400 m</p>
        </div>

        {/* base specs */}
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-3 border-t border-line/70 px-5 py-4 text-left md:px-6">
          {c.village.specs.map((s) => (
            <div key={s.label}>
              <p className="text-[8px] font-semibold tracking-[0.16em] uppercase text-fg/50">
                {s.label}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-fg/85">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* live chip */}
      <div className="absolute top-6 -right-2 flex items-center gap-2 rounded-full border border-accent/40 bg-surface/90 px-3.5 py-2 text-[8.5px] font-semibold tracking-[0.22em] uppercase text-fg/70 shadow-[0_14px_32px_-18px_rgba(0,0,0,0.65)] backdrop-blur-md md:-right-4">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        {c.village.status}
      </div>
    </div>
  );
}
