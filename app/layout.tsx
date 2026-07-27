import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/theme-provider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Pelin",
  description: "Danilo Pelin's personal web portfolio",
  icons: {
    icon:"favicon.svg",
    shortcut: "favicon.svg"
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
        <ThemeProvider>
          <div className="flex flex-col w-full h-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
