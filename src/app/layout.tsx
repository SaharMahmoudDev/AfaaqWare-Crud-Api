import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/providers/AppProviders";
import { WithChildren } from "@/shared/types/react.types";
import { Toaster } from "sonner";
import { useLocale } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Management Dashboard",
  description: "Admin dashboard for user management and administration.",
};
export default function RootLayout({
  children,
}: Readonly<WithChildren>) {
  const locale=useLocale()
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
            {children}
             <Toaster
          position={locale==="ar"?"top-right":"top-left"}
          richColors
          closeButton
        />
        </AppProviders>
      </body>
    </html>
  );
}
