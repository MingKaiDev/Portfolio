import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children,
}: {
  children: ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Left Navigation Menu */}
        
        <nav className="fixed top-0 left-0 h-full w-50 bg-gray-800 text-white flex flex-col items-center py-6">
          <div className="flex flex-col space-y-3 items-center justify-center mb-12">
            <h1 className="text-4xl font-bold text-purple-600">Ming Kai</h1>
            <h1 className="text-3xl font-semibold text-purple-400">铭 凯</h1>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link href="#home" className="text-xl">🏠 Home</Link>
            <Link href="#about" className="text-xl">👤 About Me</Link>
            <Link href="#projects" className="text-xl">📁 Projects</Link>
            <Link href="#resume" className="text-xl">📜 Resume</Link>
            <Link href="#contact" className="text-xl">✉️ Contact</Link>
          </div>
        </nav>


        {/* Main content */}
        <div className="ml-50">
          {children}
        </div>
      </body>
    </html>
  );
}
