import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";
import SideNavigation from "./_components/SideNavigation";
import { Toaster } from "react-hot-toast";

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
        <Toaster position="top-center" gutter={12} />

        <div className="flex-1 px-4 py-5 grid h-dvh grid-cols-[10rem,1fr] grid-rows-[auto,1fr] mx-2 my-7 ">
          <SideNavigation />
          <main className="max-w-7xl w-full mx-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
