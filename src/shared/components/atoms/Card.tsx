import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

const shadows = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const radius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

export function Card({
  children,
  className,
  padding = "lg",
  shadow = "sm",
  rounded = "lg",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "w-full h-fit border border-border bg-card text-card-foreground",
        paddings[padding],
        shadows[shadow],
        radius[rounded],

        interactive && "interactive hover:-translate-y-1 hover:shadow-md",

        className,
      )}
    >
      {children}
    </div>
  );
}
