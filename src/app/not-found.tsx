"use client";

import Link from "next/link";
import Lottie from "lottie-react";

import notFoundAnimation from "@/assets/lotties/notFound.json";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t=useTranslations("notFound")
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
      <Lottie
        animationData={notFoundAnimation}
        loop
        className="w-80"
      />

      <h1 className="text-2xl font-bold">{t("title")}</h1>

      <Link href="/" className="underline text-primary">
        {t("backHome")}
      </Link>
    </div>
  );
}