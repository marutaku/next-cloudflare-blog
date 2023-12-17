import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_components/common/header";
import Footer from "./_components/common/footer";
import "./globals.scss";

const font = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

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
    <html lang="ja">
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
