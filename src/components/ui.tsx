import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-transform",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Image with graceful fallback                                        */
/* ------------------------------------------------------------------ */

export function Img({
  src,
  alt,
  className,
  wrapperClassName,
  fallbackLabel = "Ground photo to be added",
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-2",
        wrapperClassName,
      )}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            loaded ? "scale-100 opacity-100" : "scale-105 opacity-0",
            className,
          )}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,var(--color-surface-2)_0%,var(--color-surface)_70%)] px-4 text-center">
          <ImageOff className="h-5 w-5 text-accent/70" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-fg/50">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons & links                                                     */
/* ------------------------------------------------------------------ */

type Variant = "gold" | "outline" | "ink" | "ghost" | "contrast";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-fg hover:text-surface",
  outline: "border border-line text-fg hover:border-accent hover:text-accent",
  ink: "bg-inverse text-inverse-fg hover:bg-gold hover:text-ink",
  ghost: "text-fg/70 hover:text-accent",
  contrast:
    "bg-inverse-accent text-inverse-fg hover:bg-inverse-accent-strong",
};

export function buttonClasses(variant: Variant = "gold", className?: string) {
  return cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
    variants[variant],
    className,
  );
}

export function LinkButton({
  href,
  children,
  variant = "gold",
  className,
  external,
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={buttonClasses(variant, className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}

export function Button({
  children,
  className,
  variant = "gold",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Section furniture                                                   */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "ink" | "inverse";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "gold"
          ? "text-accent"
          : tone === "inverse"
            ? "text-inverse-accent"
            : "text-fg/55",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          tone === "gold"
            ? "bg-accent/60"
            : tone === "inverse"
              ? "bg-inverse-accent/60"
              : "bg-fg/30",
        )}
      />
      {children}
    </span>
  );
}

export function SectionLabel({
  index,
  children,
  tone = "gold",
}: {
  index: string;
  children: ReactNode;
  tone?: "gold" | "ink" | "inverse";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] uppercase",
        tone === "gold"
          ? "text-accent"
          : tone === "inverse"
            ? "text-inverse-accent"
            : "text-fg/50",
      )}
    >
      <span
        className={cn(
          "font-mono tabular-nums",
          tone === "gold"
            ? "text-accent/50"
            : tone === "inverse"
              ? "text-inverse-accent/60"
              : "text-fg/35",
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "h-px w-6",
          tone === "gold"
            ? "bg-accent/40"
            : tone === "inverse"
              ? "bg-inverse-accent/50"
              : "bg-fg/25",
        )}
      />
      <span>{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The 400 m oval, drawn in SVG                                        */
/* ------------------------------------------------------------------ */

export function TrackGraphic({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 640 440"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const inset = i * 22;
        return (
          <rect
            key={i}
            x={46 + inset}
            y={64 + inset * 0.75}
            width={548 - inset * 2}
            height={312 - inset * 1.5}
            rx={156 - inset * 0.75}
            stroke="currentColor"
            strokeOpacity={i === 0 ? 0.75 : 0.24}
            strokeWidth={1.2}
          />
        );
      })}

      <line
        x1="320"
        y1="62"
        x2="320"
        y2="126"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="5 6"
      />

      <rect
        x={68}
        y={86}
        width={504}
        height={268}
        rx={134}
        stroke="var(--color-gold)"
        strokeWidth={2.4}
        strokeDasharray="26 214"
        className={animate ? "animate-track" : undefined}
        opacity="0.9"
      />

      <circle cx="320" cy="220" r="86" stroke="currentColor" strokeOpacity="0.16" />
      <circle cx="320" cy="220" r="5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

export function LionMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 3.5 30.2 9l7.6-1.4 1.9 7.4 6.6 3.8-3.2 7.1 2.4 7.4-7 3.4-3.3 7.1-7.5-1.7-6 4.7-5.9-4.7-7.5 1.7-3.3-7.1-7-3.4 2.4-7.4L3.2 18.7l6.6-3.8L11.7 7.5l7.6 1.4L24 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M16 19.5 21 22h6l5-2.5-1.6 8.2L24 34l-6.4-6.3L16 19.5Z"
        fill="currentColor"
      />
      <path d="M24 24.5v4" stroke="var(--color-ink)" strokeWidth="1.5" />
    </svg>
  );
}
