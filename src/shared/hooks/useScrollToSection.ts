export function useScrollToSection() {
  const scrollToSection = <T extends HTMLElement>(
    ref: React.RefObject<T | null>,
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return scrollToSection;
}