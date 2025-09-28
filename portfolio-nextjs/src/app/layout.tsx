// layout.tsx
"use client"
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode, useState } from "react";
import SidebarNav from "@/components/SidebarNav"; // adjust the import path if SidebarNav lives elsewhere

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarNav toggleTheme={() => {}} theme="dark" />
        <div className="relative lg:ml-40 ml-0 pt-14 lg:pt-0 p-8">
          <div className="shooting-star"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
