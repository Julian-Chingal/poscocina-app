export interface HealthResponse {
  data: {
    status: string;
    info: {
      database: { status: string };
      redis:    { status: string };
    };
    error: Record<string, unknown>;
    details: {
      database: { status: string };
      redis:    { status: string };
    };
  };
  meta: {
    timestamp: string;
  };
}