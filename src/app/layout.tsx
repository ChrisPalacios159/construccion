import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CONCREPRE - Concreto Premezclado de Calidad Garantizada",
  description: "Empresa líder en producción y distribución de concreto premezclado en Lima. Calidad garantizada con laboratorio propio y control riguroso.",
  keywords: ["concreto premezclado", "CONCREPRE", "Lima", "Perú", "construcción", "obra", "cotización"],
  authors: [{ name: "CONCREPRE" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
