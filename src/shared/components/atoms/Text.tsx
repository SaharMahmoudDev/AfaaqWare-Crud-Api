import { cn } from "@/lib/cn";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

type TextVariant = "default" | "muted" | "white";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {  children: React.ReactNode;
  size?: TextSize;
  variant?: TextVariant;
  center?: boolean;
  className?: string;
}

const sizes: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const variants: Record<TextVariant, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  white: "text-white",
};

export function Text({
  children,
  size = "md",
  variant = "default",
  center = false,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "leading-relaxed",
        sizes[size],
        variants[variant],
        center && "text-center",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
