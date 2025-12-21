import React from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_components/common/header";
import Footer from "./_components/common/footer";
import "./globals.scss";
import { BLOG_NAME } from "@/utils/constants";

const font = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--noto-sans-font",
});

const description =
  "クソザコエンジニアがつよつよエンジニアになるまで頑張るブログ";

const baseURL = process.env.CF_PAGES_URL || "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  openGraph: {
    description: description,
    url: baseURL,
    siteName: BLOG_NAME,
    type: "website",
    images: [{ url: "/profile.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    description: description,
    images: [{ url: "/profile.jpg" }],
  },
  title: {
    default: BLOG_NAME,
    template: `%s - ${BLOG_NAME}`,
  },
  description,
  manifest: "/site.webmanifest",
  icons: [
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/safari-pinned-tab.svg",
      sizes: "any",
      type: "image/svg+xml",
      rel: "mask-icon",
      color: "#5bbad5",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="list-disc">
      <body className={font.className}>
        <div className="min-h-screen main-area">
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
