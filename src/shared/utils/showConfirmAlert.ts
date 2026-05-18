import Swal from "sweetalert2";

export function showConfirmAlert({
  title,
  text,
  icon = "warning",
  confirmButtonText,
  cancelButtonText,
}: {
  title: string;
  text: string;
  icon?: "warning" | "error" | "success" | "info" | "question";
  confirmButtonText: string;
  cancelButtonText: string;
}) {
  return Swal.fire({
    theme: "auto",
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    buttonsStyling: false,
    customClass: {
      popup:
        "bg-background! w-100! h-70! rounded-2xl! border border-border! shadow-2xl!",
      icon: "text-xs mt-3!",
      title: "text-xl! text-foreground!",
      htmlContainer: "text-foreground!",
      actions: "flex gap-3",
      confirmButton:
        "bg-destructive! text-white! px-4 py-2 rounded-lg hover:opacity-90! transition cursor-pointer",
      cancelButton:
        "bg-foreground/60! text-white! px-4 py-2 rounded-lg hover:opacity-90! transition cursor-pointer",
    },
  });
}