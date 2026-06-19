import { AxiosError } from "axios";
import { toast } from "sonner";

interface ApiError {
    message: {
        error: string;
        message: string;
    };
}
export function showApiError(error: unknown, id?: string) {
  const err = error as AxiosError<ApiError>;

  toast.error(
    err.response?.data?.message?.error ?? "Error",
    {
      id,
      description:
        err.response?.data?.message?.message ??
        "Ocurrió un error inesperado.",
    }
  );
}