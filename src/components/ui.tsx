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

type Variant = "solid" | "outline" | "ink" | "ghost" | "contrast";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-on-accent hover:bg-accent-strong hover:text-on-accent",
  outline: "border border-line text-fg hover:border-accent hover:text-accent",
  ink: "bg-inverse text-inverse-fg hover:bg-accent hover:text-on-accent",
  ghost: "text-fg/70 hover:text-accent",
  contrast:
    "bg-inverse-accent text-on-inverse-accent hover:bg-inverse-accent-strong",
};

export function buttonClasses(variant: Variant = "solid", className?: string) {
  return cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
    variants[variant],
    className,
  );
}

export function LinkButton({
  href,
  children,
  variant = "solid",
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
  variant = "solid",
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
  tone = "accent",
  className,
}: {
  children: ReactNode;
  tone?: "accent" | "ink" | "inverse";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "accent"
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
          tone === "accent"
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
  tone = "accent",
}: {
  index: string;
  children: ReactNode;
  tone?: "accent" | "ink" | "inverse";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] uppercase",
        tone === "accent"
          ? "text-accent"
          : tone === "inverse"
            ? "text-inverse-accent"
            : "text-fg/50",
      )}
    >
      <span
        className={cn(
          "font-mono tabular-nums",
          tone === "accent"
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
          tone === "accent"
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
  accent = "var(--color-accent)",
}: {
  className?: string;
  animate?: boolean;
  accent?: string;
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
        stroke={accent}
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
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      {/* mane: eleven uneven locks, heavier at the ruff */}
      <path
        fill="currentColor"
        fillOpacity="0.42"
        d="M30.04 16.42L33.21 8.33L35.56 16.7ZM38.75 17.77L46.38 12.41L43.76 21.36ZM45.86 24.11L56.07 22.93L47.84 29.09ZM48.19 33.15L58.91 37.75L47.24 37.99ZM45.53 41.42L52.77 52.4L41.49 45.63ZM38.65 47.27L38.89 61.21L32.78 48.68ZM29.13 48.44L22.3 60.31L24.33 46.77ZM20.98 44.38L9.5 50.1L17.82 40.34ZM16.44 37L4.97 35.02L15.87 30.95ZM16.52 27.73L9.22 20.69L19.18 22.6ZM21.9 19.84L19.77 11.2L26.16 17.39Z"
      />
      {/* ears */}
      <path
        fill="currentColor"
        d="M20.5 20C20.5 14 23 11 26 13.5C28.5 15.5 28.5 18.5 27.5 21ZM43.5 20C43.5 14 41 11 38 13.5C35.5 15.5 35.5 18.5 36.5 21Z"
      />
      {/* face with knocked-out eyes, nose and muzzle */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 13C27 11.6 37 11.6 40 13C43 14.5 45 18 46.5 22C47.5 26 48 30 47 33.5C45.5 38 42.5 41.5 39 43.5C36.5 45 34 45.5 32 45.5C30 45.5 27.5 45 25 43.5C21.5 41.5 18.5 38 17 33.5C16 30 16.5 26 17.5 22C19 18 21 14.5 24 13ZM22.7 18.4C23.3 15.8 24.4 14.4 25.6 15.6C26.4 16.7 26.2 18.3 25.3 19.4ZM41.3 18.4C40.7 15.8 39.6 14.4 38.4 15.6C37.6 16.7 37.8 18.3 38.7 19.4ZM23.3 27.6C25 25.8 27.4 25.9 28.8 27.4C27.3 29 24.9 29.1 23.3 27.6ZM40.7 27.6C39 25.8 36.6 25.9 35.2 27.4C36.7 29 39.1 29.1 40.7 27.6ZM28.2 31.2C29 30 35 30 35.8 31.2L32.6 36C32.3 36.4 31.7 36.4 31.4 36ZM31.4 36H32.6V39H31.4ZM32.6 39C34.1 40.9 36.6 41.5 39 40.6L38.5 39.2C36.6 39.9 34.7 39.4 33.4 37.9ZM31.4 39C29.9 40.9 27.4 41.5 25 40.6L25.5 39.2C27.4 39.9 29.3 39.4 30.6 37.9Z"
      />
    </svg>
  );
}
