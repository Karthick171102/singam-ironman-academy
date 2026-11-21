import { Img } from "./ui";
import { useSite } from "../lib/preferences";

/**
 * First-fold right visual: a real training-ground action image with branded
 * overlays. Keeps the focus on the academy/marathon village, not a portrait.
 */
export function HeroGround({ fill = false }: { fill?: boolean }) {
  const { c } = useSite();
  const feature = c.gallery.items[0];

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
        <Img
          src={feature.image}
          alt={feature.alt}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover"
          fallbackLabel={feature.title}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,12,0.88)_0%,rgba(11,13,12,0.26)_42%,rgba(11,13,12,0.1)_72%,rgba(11,13,12,0.24)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_18%,rgba(239,106,77,0.18),transparent_70%)]" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[8.5px] font-semibold tracking-[0.26em] uppercase text-white/75">
          <span>{c.hero.location}</span>
          <span>{c.village.status}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-[9px] font-semibold tracking-[0.28em] uppercase text-media-accent">
            {c.village.label}
          </p>
          <p className="heading mt-2 max-w-[12ch] text-3xl leading-[0.92] text-white md:text-4xl">
            {c.village.titleTop}{" "}
            <span className="text-accent">{c.village.titleAccent}</span>
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
            {c.village.specs.map((s) => (
              <div key={s.label}>
                <p className="text-[7.5px] font-semibold tracking-[0.16em] uppercase text-white/55">
                  {s.label}
                </p>
                <p className="mt-1 text-[10.5px] font-semibold text-white/90">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
