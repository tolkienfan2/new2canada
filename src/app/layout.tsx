import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StickyFooter from "@/components/StickyFooter";

export const metadata: Metadata = {
  title: "New2Canada - Your Guide to Settling in Canada",
  description: "A comprehensive guide for newcomers to Canada, sourced from official government information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased pb-16 md:pb-0">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <StickyFooter />
      </body>
    </html>
  );
}
