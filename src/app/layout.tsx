import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Asambleas del Pueblo Soberano",
    template: "%s | Asambleas del Pueblo Soberano",
  },
  description:
    "Plataforma de democracia participativa. Organización, documentos, herramientas y contenidos para la construcción del poder popular desde la base.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Asambleas del Pueblo Soberano",
    description:
      "Plataforma de democracia participativa. Organización, documentos, herramientas y contenidos para la construcción del poder popular desde la base.",
    images: [{ url: "/images/logo-original.jpg", width: 1183, height: 1600 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#faf9f7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1c1917" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
