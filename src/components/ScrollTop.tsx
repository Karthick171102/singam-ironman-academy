import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "./ui";
import { useSite } from "../lib/preferences";

export function ScrollTop() {
  const { c } = useSite();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={c.meta.backToTop}
      title={c.meta.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-4 bottom-[5.25rem] z-40 grid h-11 w-11 place-items-center rounded-full border border-fg/15 bg-surface/80 text-fg/70 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:text-accent md:right-6 md:bottom-[6rem] md:h-12 md:w-12",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={2} />
    </button>
  );
}
