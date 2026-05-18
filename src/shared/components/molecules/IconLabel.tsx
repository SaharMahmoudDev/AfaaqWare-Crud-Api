import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Title";

type IconVariant = "primary" | "success" | "warning" | "destructive" | "info";
type TitleVariant = "default" | "primary" | "info" | "secondary";

interface IconLabelProps {
  icon: LucideIcon;
  title: string;
  fillIcon: boolean;
  varianTitle?: TitleVariant;
  variant?: IconVariant;
  isBold?: boolean;
  className?: string;
}

export function IconLabel({
  icon,
  title,
  variant = "primary",
  varianTitle = "default",
  fillIcon = false,
  isBold = false,
  className,
}: IconLabelProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3  w-fit", className)}
    >
      <Icon icon={icon} size="xl" variant={variant} filled={fillIcon} />

      <Title size="md" variant={varianTitle} isBold={isBold}>
        {title}
      </Title>
    </div>
  );
}
