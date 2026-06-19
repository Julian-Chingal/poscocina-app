export type AuthResult<T = unknown> = {
  data?: T;
  meta?: string[];
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[]
};

export type LoginResponse = AuthResult<{
    user: AuthUser
}>
