"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import {Providers} from "@/redux/provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Color Viewer",
  description:
    "See in real time the color palettes in a pre-builded website and use your creativity to create amazings wesite designs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
