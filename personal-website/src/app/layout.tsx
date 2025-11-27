import type { Metadata } from "next";
import "./globals.css";
import RecruiterBot from "../components/RecruiterBot";

export const metadata: Metadata = {
  title: "Melik Cagan Oduncuoglu",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">
        {children}
        <RecruiterBot />
      </body>
    </html>
  );
}
