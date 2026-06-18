import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ensureBackendAvailable } from "@/shared/system/health";
import { BackendOffline } from "@/components/BackendOffline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
