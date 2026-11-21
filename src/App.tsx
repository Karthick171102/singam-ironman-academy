import { useCallback, useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Village } from "./components/Village";
import { Programmes } from "./components/Programmes";
import { WhyJoin } from "./components/WhyJoin";
import { Gallery } from "./components/Gallery";
import { Social } from "./components/Social";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { ScrollTop } from "./components/ScrollTop";
import { Splash } from "./components/Splash";
import { SiteProvider, useSite } from "./lib/preferences";

function Shell() {
  const { c } = useSite();
  const [progress, setProgress] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const dismissSplash = useCallback(() => setShowSplash(false), []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleJoin = () => {
    window.setTimeout(() => {
      document.getElementById("name")?.focus({ preventScroll: true });
    }, 650);
  };

  return (
    <>
      {showSplash && <Splash onDone={dismissSplash} />}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-[11px] focus:font-bold focus:tracking-widest focus:text-on-accent focus:uppercase"
      >
        {c.meta.skip}
      </a>

      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <Nav onJoin={handleJoin} />

      <main id="main">
        <Hero onJoin={handleJoin} />
        <Marquee />
        <About />
        <Village />
        <Programmes />
        <WhyJoin />
        <Gallery />
        <Social />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <Shell />
    </SiteProvider>
  );
}
