import { healthCheck } from "./health.service";

export async function ensureBackendAvailable(): Promise<boolean> {
  try {
    const response = await healthCheck();

    return (
      response.data.status === "ok" &&
      response.data.info?.database?.status === "up" &&
      response.data.info?.redis?.status === "up"
    );
  } catch {
    return false;
  }
}