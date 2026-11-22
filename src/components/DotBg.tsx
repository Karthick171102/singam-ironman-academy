import DotField from "./DotField";
import { cn } from "./ui";
import { useSite } from "../lib/preferences";

/**
 * Brand dot field used in place of the old film-grain texture.
 * Colors and lightMode follow the active theme and section tone.
 */
export function DotBg({
  tone = "surface",
  className,
}: {
  tone?: "surface" | "inverse";
  className?: string;
}) {
  const { theme } = useSite();
  const dark = theme === "dark";
  const inverse = tone === "inverse";
  // A surface section is dark in dark theme, light in light theme.
  // An inverse section flips that.
  const lightSurface = inverse ? dark : !dark;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <DotField
        gradientFrom={lightSurface ? "#a3301f" : "#ef6a4d"}
        gradientTo={lightSurface ? "#dd6230" : "#ff8a6b"}
        gradientAngle={135}
        dotRadius={0.9}
        dotSpacing={16}
        pattern="grid"
        baseOpacity={lightSurface ? 0.22 : 0.18}
        opacity={lightSurface ? 0.55 : 0.5}
        glowColor={lightSurface ? "#a3301f" : "#ff8a6b"}
        glowRadius={140}
        glowIntensity={0.22}
        cursorRadius={220}
        bulgeStrength={0.08}
        waveAmplitude={0}
        sparkle={false}
        interactive
        holdToZoom={false}
        intro={false}
        lightMode={lightSurface}
        maxDevicePixelRatio={1.5}
      />
    </div>
  );
}
