import React from "react";
import { LoaderCircle } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "info"
  | "warning";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground ",

  secondary: "bg-secondary text-secondary-foreground ",

  success: "bg-success text-success-foreground ",

  warning: "bg-warning text-warning-foreground",

  info: "bg-info text-info-foreground ",

  destructive: "bg-destructive text-destructive-foreground ",

  outline:
    "border border-border bg-transparent text-foreground hover:bg-accent ",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-6 text-md",
  icon: "h-10 w-10 p-0",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "lg",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  type = "button",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        "interactive whitespace-nowrap inline-flex items-center justify-center gap-2 capitalize rounded-md font-medium shadow-sm outline-none focus-visible:outline-none cursor-pointer hover:opacity-80",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {isLoading ? <LoaderCircle className="size-4 animate-spin" /> : leftIcon}

      {children}
      {!isLoading && rightIcon}
    </button>
  );
}
