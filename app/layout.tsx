import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darren Hansel Susanto Tan | Computer Science Portfolio",
  description:
    "Portfolio website Darren Hansel Susanto Tan, Computer Science student focused on AI/ML and Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
