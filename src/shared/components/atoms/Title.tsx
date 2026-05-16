import { cn } from "@/lib/cn";

type TitleSize = "sm" | "md" | "lg" | "xl" | "2xl" ;

type TitleVariant =
  | "default"
  | "primary"
  | "info"|"secondary"

interface TitleProps {
  children: React.ReactNode;
  size?: TitleSize;
  variant?: TitleVariant;
  center?: boolean;
  isBold?:boolean,
  className?: string;
}

const sizes: Record<TitleSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
};

const variants: Record<TitleVariant, string> = {
  default: "text-foreground",
  primary: "text-primary",
  secondary:"text-muted-foreground",
  info: "text-info",
};

export function Title({
  children,
  size = "xl",
  variant = "default",
  center = false,
  isBold=false,
  className,
}: TitleProps) {
  return (
    <h2
      className={cn(
      "tracking-tight",
        !isBold&&"font-bold ",
        sizes[size],
        variants[variant],
        center && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  );
}
