import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { ModalProvider } from "@/components/providers/modalProvider";
import { cn } from "@/lib/utils";
import { SocketProvider } from "@/components/providers/socketProvider";
import { QueryProvider } from "@/components/providers/queryProvider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Distalk By KMaar",
  description:
    "Distalk offers a comprehensive communication platform with a beautiful and responsive user interface. Whether you're connecting with friends, colleagues, or communities, Distalk provides a seamless and feature-packed communication experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="author" content="KMaar" />
          <meta
            name="google-site-verification"
            content="w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI"
          />
          <link rel="author" href="https://kmaar.vercel.app/" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#6366f1"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="creator" content="KMaar Miscellaneous Studio" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="application-name" content="Distalk by KMaar" />
          <meta name="referrer" content="origin" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://distalk.vercel.app/" />
          <meta property="og:site_name" content="Distalk" />
          <meta property="og:title" content="Distalk by KMaar" />
          <meta
            property="og:description"
            content="Distalk offers a comprehensive communication platform with a beautiful and responsive user interface. Whether you're connecting with friends, colleagues, or communities, Distalk provides a seamless and feature-packed communication experience."
          />
          <meta
            property="og:image"
            content="https://cdn.sanity.io/images/x3sf3c46/production/c331bf6014517e17b863ed057eaaf290ecf650e3-500x500.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://distalk.vercel.app" />
          <meta name="twitter:creator" content="@kmaar44" />
          <meta name="twitter:title" content="Distalk by KMaar" />
          <meta
            name="twitter:description"
            content="Distalk offers a comprehensive communication platform with a beautiful and responsive user interface. Whether you're connecting with friends, colleagues, or communities, Distalk provides a seamless and feature-packed communication experience."
          />
          <meta
            name="twitter:image"
            content="https://cdn.sanity.io/images/x3sf3c46/production/c331bf6014517e17b863ed057eaaf290ecf650e3-500x500.png"
          />
          <meta name="me" content="@kmaar44" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Distalk by KMaar" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </head>
        <body className={cn(openSans.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="distalk-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
