import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./_components/common/header";
import Footer from "./_components/common/footer";
import "./globals.scss";

const font = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

const siteName = "クソザコエンジニア奮闘記";
const description =
  "クソザコエンジニアがつよつよエンジニアになるまで頑張るブログ";
const url = process.env.NEXT_PUBLIC_URL
  ? new URL(process.env.NEXT_PUBLIC_URL)
  : "http://localhost:3000";
const title = `Blog - ${process.env.NEXT_PUBLIC_SITE_TITLE}`;

export const metadata: Metadata = {
  // metadataBase: new URL(url),
  // openGraph: {
  //   title: title,
  //   description: description,
  //   url: url,
  //   siteName: title,
  //   type: "website",
  //   images: [{ url: "/profile.jpg" }],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: title,
  //   description: description,
  //   images: [{ url: "/profile.jpg" }],
  // },
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
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
