import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/common/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "クソザコエンジニア奮闘記",
  description: "クソザコエンジニアがつよつよエンジニアになるまで頑張るブログ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
