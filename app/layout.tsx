import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import TopBar from "@/components/layout/header";
import {Analytics} from "@vercel/analytics/next"

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danilo Pelin — Portfolio",
  description:
    "Software developer specializing in front-end development. Explore my projects and get in touch.",
  openGraph: {
    title: "Dan Ppelin — Portfolio",
    description: "Software developer specializing in front-end development.",
    url: "https://danppelin.vercel.app",
    siteName: "Dan Ppelin Portfolio",
    type: "website",
    images: ["https://danppelin.vercel.app/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Pelin — Portfolio",
    description: "Software developer specializing in front-end development.",
    images: ["https://danppelin.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col w-full h-full min-h-full items-center">
        <Analytics/>
        <ThemeProvider>
          <div className="flex flex-col w-full h-full">
            <TopBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
