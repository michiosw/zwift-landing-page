import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zwift - Seamless Crypto to Fiat Exchange",
  description:
    "Your trusted platform for easy peer-to-peer crypto to fiat conversions. Fast, secure, and reliable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
