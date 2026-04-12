import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL('https://nexflowx.tech'),
  title: "NexFlowX — Financial Infrastructure for Cross-Border Commerce",
  description:
    "NexFlowX provides API-driven financial infrastructure for cross-border commerce. Technology Service Provider (TSP) connecting global businesses to local payment systems through licensed partners. Non-custodial, ISO 20022 ready.",
  keywords: [
    "NexFlowX",
    "Financial Infrastructure",
    "Payment Orchestration",
    "Cross-Border Commerce",
    "API Infrastructure",
    "Technology Service Provider",
    "Multi-Region Settlement",
    "PSP Integration",
    "TSP",
    "Non-custodial",
    "ISO 20022",
    "Payment API",
    "Cross-border payments",
    "IAHUB360",
  ],
  authors: [{ name: "IAHUB360 LTD" }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/nexflowx-logo-nav.png",
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "NexFlowX — Financial Infrastructure for Cross-Border Commerce",
    description:
      "API-driven financial infrastructure for cross-border commerce. Technology Service Provider (TSP) connecting global businesses to local payment systems through licensed partners.",
    url: 'https://nexflowx.tech',
    siteName: 'NexFlowX',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    site: '@nexflowx',
    title: "NexFlowX — Financial Infrastructure",
    description: "API-driven financial infrastructure for cross-border commerce. Technology Service Provider (TSP).",
  },
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
};

export const viewport: Viewport = {
  themeColor: '#2F6BFF',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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
