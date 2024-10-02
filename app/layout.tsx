import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: {
    template: "Chef Jen 👩🏼‍🍳 - %s",
    default: "Chef Jen 👩🏼‍🍳",
  },
  description: "Devine recipes by Chef Jen",
};

const opensans = Open_Sans({
  subsets: ["latin"],

  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} bg-green-100 text-stone-800 flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1 px-5 py-6">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
