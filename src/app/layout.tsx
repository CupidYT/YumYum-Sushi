import type { Metadata } from "next";
import "@/assets/fonts/fonts.css";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";


export const metadata: Metadata = {
  title: "YumYum Sushi",
  description: "Take it. Bite it. Love it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary antialiased bg-bg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
