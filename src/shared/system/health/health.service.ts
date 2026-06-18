import { api } from "@/shared/api";
import { HealthResponse } from "./health.type";

export async function healthCheck(): Promise<HealthResponse> {
    const response = await api.get<HealthResponse>("/health");
    return response.data;
}