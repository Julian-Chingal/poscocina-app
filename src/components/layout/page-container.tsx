import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="mx-auto w-full max-w-screen-2xl flex-1 px-6 py-6">
      {children}
    </main>
  );
}
