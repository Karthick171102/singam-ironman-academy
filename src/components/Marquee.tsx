import { useSite } from "../lib/preferences";

export function Marquee() {
  const { c } = useSite();

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-accent py-3.5 text-on-accent select-none">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex shrink-0 items-center"
          >
            {c.marquee.map((word) => (
              <span key={word} className="flex items-center">
                <span className="heading px-6 text-xl whitespace-nowrap md:text-2xl">
                  {word}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
