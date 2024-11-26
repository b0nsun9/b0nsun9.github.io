import type { Metadata } from "next";
import "./globals.css";
import BlogHeader from "@/components/BlogHeader/BlogHeader";

export const metadata: Metadata = {
  title: "On The Code",
  description: "Bonsung's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BlogHeader></BlogHeader>
        {children}
      </body>
    </html>
  );
}
