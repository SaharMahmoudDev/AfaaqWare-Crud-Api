import React from "react";
import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./ReatQueryProvider";
import { NextIntlClientProvider } from "next-intl";
import { WithChildren } from "@/shared/types/react.types";

const AppProviders = ({ children }: WithChildren) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider>{children} </NextIntlClientProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
