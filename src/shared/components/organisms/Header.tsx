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

interface HeaderProps {
  title?: string;
  description?: string;
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  className?: string;

  isSidebarOpen: boolean;

  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({
  title = "Users",
  description = "Manage your users",
  searchValue,
  onSearchChange,
  className,
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="fixed right-5 top-7 z-50 md:hidden"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <header
        className={cn(
          " sticky top-0 w-full border-b border-border/80 bg-background/80 px-4 py-4 backdrop-blur-md",
          "md:px-6",
          className,
        )}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex justify-between items-center relative ">
            <div>
              <Title size="lg">{title}</Title>

              {description && (
                <Text size="md" variant="muted">
                  {description}
                </Text>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="w-full sm:w-72">
              <Input
                type="search"
                placeholder="Search users..."
                value={searchValue}
                onChange={onSearchChange}
                rightIcon={<Search className="size-4" />}
              />
            </div>

            <div className="flex justify-btween items-center space-x-4 ml-auto md:ml-0">
              {/* Theme */}

              <ThemeToggle />

              {/* Locale */}
              <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
