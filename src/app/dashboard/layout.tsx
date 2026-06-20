import { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "PosCocina - Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
