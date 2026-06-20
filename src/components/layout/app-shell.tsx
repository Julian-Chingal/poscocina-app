import { ReactNode } from "react";
import { AppNavbar } from "./app-navbar";
import { PageContainer } from "./page-container";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppNavbar />
      <PageContainer>{children}</PageContainer>
    </div>
  );
}
