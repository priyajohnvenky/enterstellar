import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Enterstellar Softwares | Secure Digital Utility Infrastructure",
  description: "Building Secure Digital Infrastructure for Public Utilities. Specialising in AI-powered metering systems and secure utility data platforms for state-level water utilities.",
  keywords: "digital utility infrastructure, AI metering, water utilities, secure platforms, World Bank, MDB, public sector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
