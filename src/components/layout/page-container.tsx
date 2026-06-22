import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        className="
      absolute inset-0 z-0
      bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.35),transparent_70%)]
      blur-[80px]
    "
      />

      <main className="relative z-10">{children}</main>
    </div>
  );
}
