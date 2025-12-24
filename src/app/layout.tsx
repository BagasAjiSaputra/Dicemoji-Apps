import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "../components/organism/Navbar";

const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dicemoji Creator",
  description: "Create unique avatars using DiceBear API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
