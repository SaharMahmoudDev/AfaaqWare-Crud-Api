import { ChevronLeft, ChevronRight } from "@/assets/icons/icons";
import { Button } from "@/shared/components/atoms/Button";
import { cn } from "@/lib/cn";
import { useLocale } from "next-intl";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const locale = useLocale();

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(pages)
  console.log(totalPages)
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2", className)}
    >
      {pages.length > 0 && (
        <Button
          size="icon"
          variant="outline"
          onClick={goToPrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="size-9  shadow-none"
        >
          {locale === "ar" ? (
            <ChevronRight className="size-4" />
          ) : (
            <ChevronLeft className="size-4" />
          )}
        </Button>
      )}
      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <Button
            key={page}
            size="icon"
            variant={isActive ? "primary" : "outline"}
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to page ${page}`}
            className={cn(
              "size-9 rounded-lg shadow-none",
              !isActive &&
                "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {page}
          </Button>
        );
      })}
      {pages.length > 0 && (
        <Button
          size="icon"
          variant="outline"
          onClick={goToNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="size-9 rounded-lg shadow-none"
        >
          {locale === "ar" ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </Button>
      )}
    </nav>
  );
}
