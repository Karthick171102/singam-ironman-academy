import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  content,
  contact,
  socials,
  type Lang,
  type SiteContent,
} from "../data/site";

export type Theme = "dark" | "light";

export const LANG_KEY = "sia-lang";
export const THEME_KEY = "sia-theme";

function readTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function readLang(): Lang {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(LANG_KEY) === "ta" ? "ta" : "en";
}

type SiteContextValue = {
  lang: Lang;
  theme: Theme;
  c: SiteContent;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const [lang, setLangState] = useState<Lang>(readLang);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<SiteContextValue>(
    () => ({
      lang,
      theme,
      c: content[lang],
      setLang,
      setTheme,
      toggleLang: () => setLangState((l) => (l === "en" ? "ta" : "en")),
      toggleTheme: () =>
        setThemeState((t) => (t === "dark" ? "light" : "dark")),
    }),
    [lang, theme, setLang, setTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return { ...ctx, contact, socials };
}
