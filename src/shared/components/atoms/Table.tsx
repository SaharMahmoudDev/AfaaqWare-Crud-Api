import { cn } from "@/lib/cn";
import { useLocale } from "next-intl";

function Table({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {

  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn("w-full caption-bottom text-md", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} />;
}

function TableBody(props: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn("border-b border-border transition-colors ", className)}
      {...props}
    />
  );
}

function TableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
      const locale = useLocale();

  return (
    <th
      className={cn(
        "h-12 px-4 align-middle text-lg font-semibold text-foreground ",
        locale==="ar"?" text-right":" text-left",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "px-4 py-4  align-middle text-foreground dark:text-foreground/90 text-md",
        className,
      )}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
