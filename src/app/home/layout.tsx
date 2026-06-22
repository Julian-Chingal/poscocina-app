import { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

interface HomeLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "PosCocina - Home",
  description: "Home",
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
