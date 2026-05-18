import { toast } from "sonner";

export function showSuccessToast(t: (key: string) => string, key: string) {
  toast.success(t(key));
}

export function showErrorToast(t: (key: string) => string, key: string) {
  toast.error(t(key));
}