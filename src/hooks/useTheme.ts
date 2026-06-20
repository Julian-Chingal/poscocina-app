'use client'

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Theme, THEMES } from "@/src/shared/config/themeConfig";

const DEFAULT_THEME: Theme = "pastel";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("local-theme-change", callback);
  
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-theme-change", callback);
  };
};

const getSnapshot = () => {
  return localStorage.getItem("theme") || DEFAULT_THEME;
};

const getServerSnapshot = () => {
  return DEFAULT_THEME;
};

export function useTheme() {
  const rawTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  
  const theme = THEMES.includes(rawTheme as Theme) ? (rawTheme as Theme) : DEFAULT_THEME;

  const setTheme = useCallback((t: Theme) => {
    localStorage.setItem("theme", t);
    window.dispatchEvent(new Event("local-theme-change"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, setTheme, themes: THEMES };
}