import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type ThemeMode = "light" | "dark" | "auto";
type ResolvedTheme = "light" | "dark";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "auto";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }

  return "auto";
}

function getResolvedTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return mode;
}

function applyThemeMode(mode: ThemeMode) {
  const resolved = getResolvedTheme(mode);
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(resolved);

  if (mode === "auto") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", mode);
  }

  root.style.colorScheme = resolved;
}

export default function DashboardThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);

    const resolved = getResolvedTheme(initialMode);
    setResolvedTheme(resolved);

    applyThemeMode(initialMode);
  }, []);

  useEffect(() => {
    if (mode !== "auto") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => {
      const resolved = getResolvedTheme("auto");
      setResolvedTheme(resolved);
      applyThemeMode("auto");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode]);

  function toggleTheme() {
    const newMode = resolvedTheme === "dark" ? "light" : "dark";

    setMode(newMode);
    setResolvedTheme(newMode);
    applyThemeMode(newMode);
    window.localStorage.setItem("theme", newMode);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={toggleTheme}
      className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon size={22} />
      ) : (
        <MoonIcon size={22} />
      )}
    </Button>
  );
}
