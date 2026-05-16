"use client";
import { useEffect } from "react";
import { Locale, useLocale } from "next-intl";
import { Button } from "./Button";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function LocaleSwitcher({ changeLocaleAction }: Props) {
  const locale = useLocale();
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const nextLocale = locale === "en" ? "ar" : "en";
  
  

  return (
    <Button
      onClick={() => changeLocaleAction(nextLocale)}variant="secondary" size="icon"
    >
      {locale === "en" ? "AR" : "EN"}
    </Button>
  );
}
