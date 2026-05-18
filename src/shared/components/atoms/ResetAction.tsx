import { cn } from "@/lib/cn";

type ActionTextProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "reset";
};

export function ResetAction({
  children,
  onClick,
  className,
  type = "button",
}: ActionTextProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "text-sm text-muted-foreground underline cursor-pointer hover:text-muted-foreground/70",
        className,
      )}
    >
      {children}
    </button>
  );
}