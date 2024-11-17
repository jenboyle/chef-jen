import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./_components/Header";
import SideNavigation from "./_components/SideNavigation";
import { Toaster } from "react-hot-toast";
import Store from "./store";

export const revalidate = 3600;

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

const mysvg =
  "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/carrots.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} text-stone-800 flex flex-col min-h-screen`}
        style={{
          backgroundImage: `linear-gradient(rgba(240, 252, 231, 0.85), rgba(254, 249, 305, 0.8)), url(${mysvg})`,
        }}
      >
        <Store>
          <Header />
          <Toaster position="top-center" gutter={12} />

          <div className="flex-1 px-4 py-5 grid h-dvh grid-cols-[8rem,1fr] grid-rows-[auto,1fr] mx-2 my-7 ">
            <SideNavigation />
            <main className="max-w-7xl w-full mx-5">{children}</main>
          </div>
        </Store>
      </body>
    </html>
  );
}
