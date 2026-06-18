import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ensureBackendAvailable } from "@/shared/system/health";
import { BackendOffline } from "@/components/BackendOffline";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PosCocina",
  description: "Sistema POS para cocina",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const online = await ensureBackendAvailable();

  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-zinc-50 text-zinc-900 flex flex-col">
        {online ? (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {children}
          </div>
        ) : (
          <BackendOffline />
        )}
      </body>
    </html>
  );
}
