import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "hello-world (SSR)",
  description: "Пример SSR в Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  console.log('helloworld');
  return (
    <html lang="ru">
      <h1>Привет</h1>ы
      <body>{children}</body>
    </html>
  );
}
