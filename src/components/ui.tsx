import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { TamilLogo } from "./TamilLogo";

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

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 53 43"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g clipPath="url(#sia-mark-clip)">
        <path
          d="M15.5 27.0752C15.5 20.4478 20.8726 15.0752 27.5 15.0752H37.5V27.0752H27.5V42.0752H15.5V27.0752Z"
          fill="#FF5900"
        />
        <path
          d="M52.5 28.0752C52.5 35.8072 46.232 42.0752 38.5 42.0752H30.5V30.0752H38.5C39.6046 30.0752 40.5 29.1798 40.5 28.0752V27.0752H52.5V28.0752Z"
          fill="#FF5900"
        />
        <path
          d="M27.5 0.0751953C12.5883 0.0751953 0.5 12.1635 0.5 27.0752V42.0752H12.5V27.0752C12.5 18.7909 19.2157 12.0752 27.5 12.0752H38.5C39.6046 12.0752 40.5 12.9706 40.5 14.0752V15.0752H52.5V14.0752C52.5 6.34321 46.232 0.0751953 38.5 0.0751953H27.5Z"
          fill="#FF5900"
        />
      </g>
      <defs>
        <clipPath id="sia-mark-clip">
          <rect
            width="53"
            height="43"
            fill="white"
            transform="matrix(-1 0 0 1 53 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BrandLogo({
  className,
  lang = "en",
}: {
  className?: string;
  lang?: "en" | "ta";
}) {
  if (lang === "ta") return <TamilLogo className={className} />;

  return (
    <svg
      viewBox="0 0 215 43"
      fill="none"
      role="img"
      aria-label="Singam Ironman Academy"
      className={className}
    >
      <g clipPath="url(#sia-logo-clip)">
        <path
          d="M15.5 27.0752C15.5 20.4478 20.8726 15.0752 27.5 15.0752H37.5V27.0752H27.5V42.0752H15.5V27.0752Z"
          fill="#FF5900"
        />
        <path
          d="M52.5 28.0752C52.5 35.8072 46.232 42.0752 38.5 42.0752H30.5V30.0752H38.5C39.6046 30.0752 40.5 29.1798 40.5 28.0752V27.0752H52.5V28.0752Z"
          fill="#FF5900"
        />
        <path
          d="M27.5 0.0751953C12.5883 0.0751953 0.5 12.1635 0.5 27.0752V42.0752H12.5V27.0752C12.5 18.7909 19.2157 12.0752 27.5 12.0752H38.5C39.6046 12.0752 40.5 12.9706 40.5 14.0752V15.0752H52.5V14.0752C52.5 6.34321 46.232 0.0751953 38.5 0.0751953H27.5Z"
          fill="#FF5900"
        />
      </g>
      <g fill="currentColor">
        <path d="M73.1001 24.5C71.4931 24.5 70.0417 24.2138 68.7459 23.6413C67.4603 23.0587 66.4006 22.2307 65.5669 21.1573C64.7433 20.0738 64.221 18.7858 64 17.2933L68.2789 16.6493C68.5802 17.9169 69.203 18.8931 70.1471 19.578C71.0913 20.2629 72.166 20.6053 73.3713 20.6053C74.0443 20.6053 74.6972 20.498 75.33 20.2833C75.9628 20.0687 76.4801 19.7518 76.8818 19.3327C77.2936 18.9136 77.4996 18.3973 77.4996 17.784C77.4996 17.5591 77.4644 17.3444 77.3941 17.14C77.3338 16.9253 77.2284 16.726 77.0777 16.542C76.927 16.358 76.7111 16.1842 76.4298 16.0207C76.1586 15.8571 75.8121 15.7089 75.3902 15.576L69.7554 13.8893C69.3335 13.7667 68.8414 13.5929 68.2789 13.368C67.7264 13.1431 67.1891 12.8211 66.6668 12.402C66.1445 11.9829 65.7075 11.4309 65.356 10.746C65.0145 10.0509 64.8437 9.17689 64.8437 8.124C64.8437 6.64178 65.2103 5.41 65.9436 4.42867C66.6768 3.44733 67.6561 2.71644 68.8815 2.236C70.1069 1.75555 71.4629 1.52044 72.9495 1.53067C74.4461 1.55111 75.782 1.81178 76.9572 2.31267C78.1323 2.81356 79.1167 3.54444 79.9102 4.50533C80.7037 5.456 81.2762 6.62133 81.6278 8.00133L77.1982 8.768C77.0375 8.05244 76.7412 7.44933 76.3093 6.95867C75.8774 6.468 75.3601 6.09489 74.7575 5.83933C74.1648 5.58378 73.5421 5.44578 72.8892 5.42533C72.2464 5.40489 71.6387 5.49689 71.0662 5.70133C70.5037 5.89556 70.0417 6.18178 69.6801 6.56C69.3285 6.93822 69.1527 7.388 69.1527 7.90933C69.1527 8.38978 69.2984 8.78333 69.5897 9.09C69.8809 9.38644 70.2476 9.62667 70.6895 9.81067C71.1315 9.99467 71.5835 10.148 72.0455 10.2707L75.8121 11.3133C76.3746 11.4667 76.9973 11.6711 77.6803 11.9267C78.3634 12.172 79.0162 12.5196 79.639 12.9693C80.2718 13.4089 80.7891 13.9916 81.1908 14.7173C81.6027 15.4431 81.8086 16.3631 81.8086 17.4773C81.8086 18.6631 81.5625 19.7007 81.0703 20.59C80.5882 21.4691 79.9353 22.2 79.1117 22.7827C78.288 23.3551 77.3539 23.7844 76.3093 24.0707C75.2747 24.3569 74.205 24.5 73.1001 24.5Z" />
        <path d="M85.4215 24.04V1.96H89.5195V24.04H85.4215Z" />
        <path d="M94.0364 24.04V1.96H98.1948L107.626 16.68V1.96H111.785V24.04H107.626L98.1948 9.32V24.04H94.0364Z" />
        <path d="M125.029 24.5C123.663 24.5 122.362 24.2547 121.126 23.764C119.891 23.2631 118.796 22.5271 117.842 21.556C116.898 20.5849 116.149 19.3838 115.597 17.9527C115.055 16.5216 114.783 14.8707 114.783 13C114.783 10.5569 115.24 8.48178 116.154 6.77467C117.079 5.05733 118.314 3.74889 119.861 2.84933C121.418 1.94978 123.14 1.5 125.029 1.5C127.821 1.5 130.016 2.15933 131.613 3.478C133.21 4.79667 134.279 6.66222 134.822 9.07467L130.633 9.688C130.242 8.4 129.599 7.37267 128.705 6.606C127.821 5.82911 126.686 5.43555 125.3 5.42533C123.924 5.40489 122.779 5.70644 121.865 6.33C120.951 6.95355 120.263 7.83778 119.801 8.98267C119.349 10.1276 119.123 11.4667 119.123 13C119.123 14.5333 119.349 15.8622 119.801 16.9867C120.263 18.1111 120.951 18.9851 121.865 19.6087C122.779 20.2322 123.924 20.5542 125.3 20.5747C126.234 20.5951 127.078 20.4316 127.831 20.084C128.594 19.7364 129.237 19.1896 129.759 18.4433C130.282 17.6971 130.653 16.7413 130.874 15.576H127.439V12.356H135.244C135.264 12.4889 135.279 12.724 135.289 13.0613C135.299 13.3987 135.304 13.5929 135.304 13.644C135.304 15.76 134.882 17.6358 134.038 19.2713C133.195 20.9069 132.004 22.1898 130.468 23.12C128.931 24.04 127.118 24.5 125.029 24.5Z" />
        <path d="M136.228 24.04L142.858 1.96H148.975L155.604 24.04H151.385L145.479 4.56667H146.263L140.447 24.04H136.228Z" />
        <path d="M158.304 24.04V1.96H161.981L169.152 16.6187L176.324 1.96H180V24.04H176.173V10.8533L169.875 24.04H168.429L162.131 10.8533V24.04H158.304Z" />
      </g>
      <g fill="currentColor" opacity="0.62">
        <path d="M64 41.26V29.74H65.672V41.26H64Z" />
        <path d="M68.0744 41.26V29.74H72.7304C72.8424 29.74 72.981 29.7453 73.1464 29.756C73.3117 29.7613 73.469 29.7773 73.6184 29.804C74.2584 29.9053 74.7917 30.124 75.2184 30.46C75.6504 30.796 75.973 31.22 76.1864 31.732C76.3997 32.244 76.5064 32.8093 76.5064 33.428C76.5064 34.3453 76.2717 35.1373 75.8024 35.804C75.333 36.4653 74.629 36.8787 73.6904 37.044L73.0104 37.124H69.7464V41.26H68.0744ZM74.8104 41.26L72.5384 36.572L74.2264 36.14L76.7224 41.26H74.8104ZM69.7464 35.54H72.6664C72.773 35.54 72.8904 35.5347 73.0184 35.524C73.1517 35.5133 73.277 35.4947 73.3944 35.468C73.7357 35.388 74.0104 35.2413 74.2184 35.028C74.4264 34.8093 74.5757 34.5587 74.6664 34.276C74.757 33.9933 74.8024 33.7107 74.8024 33.428C74.8024 33.1453 74.757 32.8653 74.6664 32.588C74.5757 32.3053 74.4264 32.0573 74.2184 31.844C74.0104 31.6253 73.7357 31.476 73.3944 31.396C73.277 31.364 73.1517 31.3427 73.0184 31.332C72.8904 31.3213 72.773 31.316 72.6664 31.316H69.7464V35.54Z" />
        <path d="M83.2886 41.5C82.1366 41.5 81.1553 41.2493 80.3446 40.748C79.534 40.2413 78.9126 39.5373 78.4806 38.636C78.054 37.7347 77.8406 36.6893 77.8406 35.5C77.8406 34.3107 78.054 33.2653 78.4806 32.364C78.9126 31.4627 79.534 30.7613 80.3446 30.26C81.1553 29.7533 82.1366 29.5 83.2886 29.5C84.4353 29.5 85.414 29.7533 86.2246 30.26C87.0406 30.7613 87.662 31.4627 88.0886 32.364C88.5153 33.2653 88.7286 34.3107 88.7286 35.5C88.7286 36.6893 88.5153 37.7347 88.0886 38.636C87.662 39.5373 87.0406 40.2413 86.2246 40.748C85.414 41.2493 84.4353 41.5 83.2886 41.5ZM83.2886 39.908C84.1046 39.9187 84.782 39.74 85.3206 39.372C85.8646 38.9987 86.2726 38.4813 86.5446 37.82C86.8166 37.1533 86.9526 36.38 86.9526 35.5C86.9526 34.62 86.8166 33.852 86.5446 33.196C86.2726 32.5347 85.8646 32.02 85.3206 31.652C84.782 31.284 84.1046 31.0973 83.2886 31.092C82.4726 31.0813 81.7926 31.26 81.2486 31.628C80.71 31.996 80.3046 32.5133 80.0326 33.18C79.7606 33.8467 79.622 34.62 79.6166 35.5C79.6113 36.38 79.7446 37.1507 80.0166 37.812C80.2886 38.468 80.6966 38.98 81.2406 39.348C81.79 39.716 82.4726 39.9027 83.2886 39.908Z" />
        <path d="M90.3244 41.26V29.74H92.0204L97.6924 38.3V29.74H99.3884V41.26H97.6924L92.0204 32.692V41.26H90.3244Z" />
        <path d="M101.621 41.26V29.74H103.133L107.309 38.404L111.461 29.74H112.989V41.252H111.405V33.372L107.685 41.26H106.925L103.197 33.372V41.26H101.621Z" />
        <path d="M114.431 41.26L118.175 29.74H120.583L124.327 41.26H122.591L119.143 30.748H119.575L116.167 41.26H114.431Z" />
        <path d="M125.762 41.26V29.74H127.458L133.13 38.3V29.74H134.826V41.26H133.13L127.458 32.692V41.26H125.762Z" />
        <path d="M139.462 41.26L143.206 29.74H145.614L149.358 41.26H147.622L144.174 30.748H144.606L141.198 41.26H139.462Z" />
        <path d="M155.289 41.5C154.137 41.5 153.155 41.2493 152.345 40.748C151.534 40.2413 150.913 39.5373 150.481 38.636C150.054 37.7347 149.841 36.6893 149.841 35.5C149.841 34.3107 150.054 33.2653 150.481 32.364C150.913 31.4627 151.534 30.7613 152.345 30.26C153.155 29.7533 154.137 29.5 155.289 29.5C156.617 29.5 157.715 29.836 158.585 30.508C159.459 31.18 160.067 32.084 160.409 33.22L158.713 33.676C158.489 32.8707 158.089 32.2387 157.513 31.78C156.942 31.3213 156.201 31.092 155.289 31.092C154.473 31.092 153.793 31.276 153.249 31.644C152.705 32.012 152.294 32.5267 152.017 33.188C151.745 33.8493 151.609 34.62 151.609 35.5C151.603 36.38 151.737 37.1507 152.009 37.812C152.286 38.4733 152.697 38.988 153.241 39.356C153.79 39.724 154.473 39.908 155.289 39.908C156.201 39.908 156.942 39.6787 157.513 39.22C158.089 38.756 158.489 38.124 158.713 37.324L160.409 37.78C160.067 38.916 159.459 39.82 158.585 40.492C157.715 41.164 156.617 41.5 155.289 41.5Z" />
        <path d="M161.056 41.26L164.8 29.74H167.208L170.952 41.26H169.216L165.768 30.748H166.2L162.792 41.26H161.056Z" />
        <path d="M172.387 41.26V29.74H175.995C176.102 29.74 176.299 29.7427 176.587 29.748C176.88 29.7533 177.16 29.7747 177.427 29.812C178.328 29.924 179.086 30.2467 179.699 30.78C180.318 31.3133 180.784 31.9907 181.099 32.812C181.414 33.628 181.571 34.524 181.571 35.5C181.571 36.4813 181.414 37.3827 181.099 38.204C180.784 39.02 180.318 39.6947 179.699 40.228C179.086 40.756 178.328 41.076 177.427 41.188C177.16 41.2253 176.88 41.2467 176.587 41.252C176.299 41.2573 176.102 41.26 175.995 41.26H172.387ZM174.099 39.668H175.995C176.176 39.668 176.392 39.6627 176.643 39.652C176.894 39.6413 177.115 39.62 177.307 39.588C177.894 39.476 178.368 39.2227 178.731 38.828C179.099 38.428 179.368 37.9373 179.539 37.356C179.71 36.7747 179.795 36.156 179.795 35.5C179.795 34.8227 179.707 34.196 179.531 33.62C179.355 33.0387 179.083 32.5533 178.715 32.164C178.352 31.7693 177.883 31.5187 177.307 31.412C177.115 31.3747 176.891 31.3533 176.635 31.348C176.384 31.3373 176.171 31.332 175.995 31.332H174.099V39.668Z" />
        <path d="M183.434 41.26V29.74H190.794V31.316H185.106V34.548H189.834V36.124H185.106V39.684H190.794V41.26H183.434Z" />
        <path d="M192.715 41.26V29.74H194.227L198.403 38.404L202.555 29.74H204.083V41.252H202.499V33.372L198.779 41.26H198.019L194.291 33.372V41.26H192.715Z" />
        <path d="M209.1 41.26V36.5L205.204 29.74H207.156L209.948 34.58L212.74 29.74H214.692L210.796 36.5V41.26H209.1Z" />
      </g>
      <defs>
        <clipPath id="sia-logo-clip">
          <rect
            width="53"
            height="43"
            fill="white"
            transform="matrix(-1 0 0 1 53 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
