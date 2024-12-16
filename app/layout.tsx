import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zwift - Seamless Crypto to Fiat Exchange",
  description:
    "Your trusted platform for easy peer-to-peer crypto to fiat conversions. Fast, secure, and reliable.",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
