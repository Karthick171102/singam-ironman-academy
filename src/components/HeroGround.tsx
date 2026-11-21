import { Img } from "./ui";
import { useSite } from "../lib/preferences";

/**
 * First-fold right visual: a clean training/action image, no overlay text.
 */
export function HeroGround({ fill = false }: { fill?: boolean }) {
  const { c } = useSite();
  const feature = c.gallery.items[0];

  return (
    <div
      className={
        fill
          ? "relative h-full w-full overflow-hidden rounded-[1.5rem] border border-line/70 bg-surface-2 shadow-[0_36px_80px_-40px_rgba(0,0,0,0.6)]"
          : "relative mx-auto aspect-[16/10] w-full max-w-[420px] overflow-hidden rounded-[1.5rem] border border-line/70 bg-surface-2 shadow-[0_36px_80px_-40px_rgba(0,0,0,0.6)] sm:aspect-[5/3] lg:max-w-[480px]"
      }
    >
      <Img
        src={feature.image}
        alt={feature.alt}
        wrapperClassName="absolute inset-0 h-full w-full"
        className="h-full w-full object-cover"
        fallbackLabel={feature.title}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,12,0.18),transparent_45%)]" />
    </div>
  );
}
