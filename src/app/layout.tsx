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
  title: "CONCRETO ELOHIN S.A.C. - Concreto Premezclado de Calidad Garantizada",
  description: "CONCRETO ELOHIN S.A.C. - Empresa líder en producción y distribución de concreto premezclado en Lima. Techados, losas, obras viales y más. Calidad garantizada.",
  keywords: ["concreto premezclado", "CONCRETO ELOHIN", "techado", "losa", "Lima", "Perú", "construcción", "obra", "cotización"],
  authors: [{ name: "CONCRETO ELOHIN S.A.C." }],
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
