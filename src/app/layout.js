import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Nick Brown",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
