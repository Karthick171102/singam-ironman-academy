import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "./ui";

/**
 * Blur + fade + rise reveal inspired by Magic UI / React Bits blur-fade.
 * Uses IntersectionObserver (no framer-motion dependency).
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  inView = true,
  yOffset = 12,
  blur = "6px",
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  yOffset?: number;
  blur?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(!inView);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}s`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform,filter] will-change-transform",
        shown
          ? "translate-y-0 opacity-100 blur-0"
          : "opacity-0",
        className,
      )}
      style={{
        ...style,
        ...(shown
          ? {}
          : { transform: `translateY(${yOffset}px)`, filter: `blur(${blur})` }),
      }}
    >
      {children}
    </div>
  );
}

/**
 * Animated number ticker inspired by Magic UI Number Ticker.
 * Parses leading numeric portion and preserves suffix (e.g. "169K", "400 m").
 */
export function NumberTicker({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }
    const decimals = numStr.includes(".")
      ? (numStr.split(".")[1] || "").length
      : 0;

    const format = (n: number) => {
      const fixed = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      return `${prefix}${fixed}${suffix}`;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo-ish
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(format(target * eased));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/**
 * SVG spotlight glow inspired by Aceternity UI Spotlight.
 */
export function Spotlight({
  className,
  fill = "var(--hero-glow)",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[160%] w-[140%] opacity-0 animate-spotlight lg:w-[84%]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      aria-hidden="true"
    >
      <g filter="url(#spotlight-filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.45"
        />
      </g>
      <defs>
        <filter
          id="spotlight-filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * Animated dot pattern background inspired by Magic UI Dot Pattern.
 */
export function DotPattern({
  className,
  glow = false,
  cr = 1,
  cx = 1,
  cy = 1,
}: {
  className?: string;
  glow?: boolean;
  cr?: number;
  cx?: number;
  cy?: number;
}) {
  const id = useRef(`dots-${Math.random().toString(36).slice(2, 9)}`).current;
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-fg/15",
        glow && "animate-dot-glow",
        className,
      )}
    >
      <defs>
        <pattern id={id} x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Animated shine border inspired by Magic UI Shine Border.
 * Wrap content and it draws a moving conic-gradient border.
 */
export function ShineBorder({
  children,
  className,
  borderWidth = 1.2,
  duration = 10,
  color = ["var(--color-accent)", "var(--color-accent-strong)", "var(--hero-glow)"],
  borderRadius = 9999,
}: {
  children?: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  borderRadius?: number;
}) {
  const colors = Array.isArray(color) ? color.join(",") : color;
  return (
    <div
      className={cn("relative overflow-hidden p-px", className)}
      style={{ borderRadius }}
    >
      <div
        className="pointer-events-none absolute inset-[-150%] animate-shine-border"
        style={
          {
            background: `conic-gradient(from 0deg, transparent 20%, ${colors}, transparent 80%)`,
            "--shine-duration": `${duration}s`,
          } as CSSProperties
        }
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          padding: borderWidth,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background: "transparent",
        }}
      />
      <div className="relative rounded-[inherit]">{children}</div>
    </div>
  );
}

/**
 * Hover spotlight for cards inspired by Aceternity Card Spotlight.
 */
export function HoverGlow({
  className,
  color = "var(--color-accent)",
}: {
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        className,
      )}
      style={{
        background: `radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, ${color} 18%, transparent), transparent 45%)`,
      }}
    />
  );
}
