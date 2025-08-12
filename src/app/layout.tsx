import type { Metadata } from "next";
import "@/assets/fonts/fonts.css";
import "./globals.css";


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
      <body className="font-arial antialiased">
        {children}
      </body>
    </html>
  );
}
