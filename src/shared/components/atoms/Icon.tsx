import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconVariant =
  | "default"
  | "muted"
  | "primary"
  | "success"
  | "warning"
  | "destructive"
  | "info";

type IconSize = "sm" | "md" | "lg" | "xl";

interface IconProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  withBackground?: boolean;
  backgroundVariant?: IconBackgroundVariant;
  filled?: boolean;
  className?: string;
  wrapperClassName?: string;
}

const iconSizes: Record<IconSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
};

const boxSizes: Record<IconSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
  xl: "size-14",
};

const colors: Record<IconVariant, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
  info: "text-info",
};
type IconBackgroundVariant = Extract<
  IconVariant,
  "primary" | "success" | "warning" | "destructive"
>;
const backgrounds: Record<IconBackgroundVariant, string> = {
  primary: "bg-primary-soft",
  success: "bg-success-soft",
  warning: "bg-warning-soft",
  destructive: "bg-destructive-soft",
};

export function Icon({
  icon: IconComponent,
  variant = "default",
  backgroundVariant = "primary",
  size = "md",
  withBackground = false,
  filled = false,
  className,
  wrapperClassName,
}: IconProps) {
  const icon = (
    <IconComponent
      className={cn(
        iconSizes[size],
        colors[variant],
        filled && "fill-current",
        className,
      )}
    />
  );

  if (!withBackground) {
    return icon;
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md",
        boxSizes[size],
        backgrounds[backgroundVariant],
        wrapperClassName,
      )}
    >
      {icon}
    </span>
  );
}
