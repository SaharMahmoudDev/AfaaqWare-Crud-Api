"use client";

import { Search, Menu, X } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import ThemeToggle from "../atoms/ThemeButton";
import { Button } from "../atoms/Button";
import LocaleSwitcher from "../atoms/localeSwitcher";
import { changeLocaleAction } from "@/i18n/locale";
import { useLocale, useTranslations } from "next-intl";
interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  className?: string;

  isSidebarOpen: boolean;

  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({
  searchValue,
  onSearchChange,
  className,
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-10 border-b border-border/80 bg-sidebar/20 sm:bg-sidebar/80 px-4 py-5 backdrop-blur-md",
          "md:px-6  ",
          locale === "ar" ? " rounded-tl-xl " : " rounded-tr-xl ",

          className,
        )}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Top row */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <Title size="xl">{t("title")}</Title>

              <Text size="md" variant="muted">
                {t("subtitle")}
              </Text>
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="relative z-70 shrink-0 lg:hidden"
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 z-10">
            <div className="w-full sm:w-72">
              <Input
                type="search"
                placeholder={t("searchPlaceholder")}
                value={searchValue}
                onChange={onSearchChange}
                rightIcon={<Search className="size-4" />}
              />
            </div>

            <div
              className={`flex items-center space-x-4 ${
                locale === "ar" ? "mr-auto lg:mr-0" : "ml-auto lg:ml-0"
              }`}
            >
              <ThemeToggle />
              <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
