"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, ReactNode } from "react";

type FontType = "serif" | "geist" | "mono";

interface FontContextType {
  font: FontType;
  setFont: (font: FontType) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}

export function Providers({ children }: { children: ReactNode }) {
  const [font, setFont] = useState<FontType>("serif");

  const fontStyle = {
    serif: { fontFamily: '"Times New Roman", Times, serif' },
    geist: { fontFamily: 'var(--font-geist)' },
    mono: { fontFamily: 'var(--font-jetbrains-mono)' },
  }[font];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <FontContext.Provider value={{ font, setFont }}>
        <div style={fontStyle} className="transition-all duration-150">
          {children}
        </div>
      </FontContext.Provider>
    </ThemeProvider>
  );
}
