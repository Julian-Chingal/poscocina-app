
'use client'

import { useEffect, useState } from "react";
import { Theme, THEMES } from "@/config/themeConfig";


export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("pastel");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved && THEMES.includes(saved)) {
      setThemeState(saved);
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = "pastel";
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
  };

  return { theme, setTheme, themes: THEMES };
}