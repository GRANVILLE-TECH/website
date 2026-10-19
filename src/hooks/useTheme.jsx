/**
 * useTheme — Dark/Light mode context and hook
 *
 * Strategy: Tailwind "class" dark mode — toggling the `dark` class on <html>.
 * Persistence: localStorage key "granville-theme"
 * Default: respects OS preference (prefers-color-scheme), falls back to "dark"
 *          since the brand is dark-first.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "granville-theme";

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (SSR, private mode)
  }
  // Respect OS preference — default to dark for brand consistency
  if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => getInitialTheme());

  // Apply / remove the `dark` class on <html> and persist choice
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setTheme = useCallback((value) => {
    if (value === "dark" || value === "light") setThemeState(value);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Hook — use inside any component wrapped by ThemeProvider */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
