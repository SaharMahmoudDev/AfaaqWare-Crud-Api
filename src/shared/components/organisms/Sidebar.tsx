"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, LogOut } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";
import { Text } from "../atoms/Text";
import { IconLabel } from "../molecules/IconLabel";
import { Icon as AppIcon } from "@/shared/components/atoms/Icon";
import { SIDEBAR_LINKS } from "@/shared/utils/data";
import { useLocale, useTranslations } from "next-intl";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  const closeSidebar = () => setIsOpen(false);
  const t = useTranslations("sidebar");
  const locale = useLocale();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 z-50 flex min-h-screen w-70 flex-col border-sidebar-border bg-sidebar px-4 py-6 text-sidebar-foreground",
          "transition-transform duration-300 ease-in-out",
          "lg:static lg:translate-x-0",

          locale === "ar"
            ? "right-0 border-l rounded-tr-xl rounded-br-xl"
            : "left-0 border-r  rounded-tl-xl rounded-bl-xl",

          isOpen
            ? "translate-x-0"
            : locale === "ar"
              ? "translate-x-full"
              : "-translate-x-full",
        )}
      >
        {/* Brand */}
        <div className="mb-10 flex items-center gap-3 px-3 pt-4 lg:pt-0">
          <IconLabel
            icon={Users}
            title={t("brand")}
            varianTitle="primary"
            fillIcon
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-3">
          {SIDEBAR_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeSidebar}
                className={cn(
                  "interactive flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                )}
              >
                <AppIcon
                  icon={item.icon}
                  className="text-inherit"
                  size="lg"
                  filled={item.fill}
                />

                <Text className="text-inherit">{t(item.label)}</Text>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <button className="interactive mt-auto flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground">
          <LogOut className="size-5" />

          <Text className="cursor-pointer text-inherit">{t("logout")}</Text>
        </button>
      </aside>
    </>
  );
}
