import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ensureBackendAvailable } from "@/shared/system/health";
import { BackendOffline } from "@/components/BackendOffline";
import { Toaster } from "@/components/ui/sonner";

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
    <html lang="es-ES" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="bottom-right" richColors />
        {online ? children : <BackendOffline />}
      </body>
    </html>
  );
}
