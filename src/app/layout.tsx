// Vendors
import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
// Styles
import "./globals.css";

const curlyFont = Oooh_Baby({
  weight: "400",
  variable: "--font-curly",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nos Casamos - Gaby & Charly",
  description: "Página de invitación al casamiento de Gabriela y Carlos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${curlyFont.variable} grid justify-center bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
