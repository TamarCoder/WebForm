import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "WebForm",
  description: "Next.js აპლიკაცია SCSS-ით",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
