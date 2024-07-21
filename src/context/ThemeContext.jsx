"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  toggle: () => {},
  mode: "light",
});

export const ThemeProvider = ({ children }) => {
  const [isLocalStorageRead, setIsLocalStorageRead] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setMode(storedTheme);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLocalStorageRead(true);
    }
  }, []);

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    try {
      localStorage.setItem("theme", newMode);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLocalStorageRead) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
