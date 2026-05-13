"use client";
import { WithChildren } from "@/shared/types/react.types";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: WithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
