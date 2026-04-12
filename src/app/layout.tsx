import type { Metadata } from "next";
import { Inter, Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexFlowX — Financial Infrastructure for Cross-Border Commerce",
  description:
    "API-first orchestration layer connecting global sellers to local payment systems. Technology Service Provider for cross-border payment infrastructure.",
  keywords: [
    "NexFlowX",
    "Financial Infrastructure",
    "Payment Orchestration",
    "Cross-Border Commerce",
    "API Infrastructure",
    "Technology Service Provider",
    "Multi-Region Settlement",
    "PSP Integration",
  ],
  authors: [{ name: "IAHUB360 LTD" }],
  icons: {
    icon: "/nexflowx-logo-nav.png",
  },
  openGraph: {
    title: "NexFlowX — Financial Infrastructure for Cross-Border Commerce",
    description:
      "API-first orchestration layer connecting global sellers to local payment systems.",
    siteName: "NexFlowX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFlowX — Financial Infrastructure",
    description: "API-first orchestration layer for cross-border commerce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
