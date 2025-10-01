import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurora Portfolio",
  description: "React Bits Aurora background with Hero section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">{children}</body>
    </html>
  );
}
