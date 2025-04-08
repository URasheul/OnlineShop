import type { Metadata } from "next";
import { DM_Sans, Allerta_Stencil } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "500"]
});

const allertaStencil = Allerta_Stencil({
  variable: "--font-headling",
  weight: "400",
  subsets: ["latin"]  
});

export const metadata: Metadata = {
  title: "SHOPPE",
  description: "Online jewelry shop"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${dmSans.variable} ${allertaStencil.variable}`}>
        {children}
      </body>
    </html>
  );
}
