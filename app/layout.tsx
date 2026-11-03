import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet Pour",
  description: "The Art of Perfect Pour",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={"h-full antialiased"}>
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
