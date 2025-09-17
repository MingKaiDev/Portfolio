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
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Left Navigation Menu */}

        <nav className="fixed top-0 left-0 h-full w-50 bg-gray-800 text-white flex flex-col items-center py-6">
          <div className="flex flex-col space-y-3 items-center justify-center mb-12">
            <h1 className="text-4xl font-bold text-purple-600" style={{ fontFamily: '"Brush Script MT", cursive' }}>Ming Kai</h1>
            <h1 className="text-3xl font-semibold text-purple-400" style={{ fontFamily: '"Brush Script MT", cursive' }}>铭 凯</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <Link
              href="#home"
              className="text-xl font-extrabold text-white hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xl font-extrabold text-white hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-xl font-extrabold text-white hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Projects
            </Link>
            <Link
              href="#resume"
              className="text-xl font-extrabold text-white hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="text-xl font-extrabold text-white hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Contact
            </Link>
          </div>


        </nav>


        {/* Main content with background and shooting star effect */}
        <div className="ml-50 p-8 relative bg-cover bg-center" style={{
          backgroundImage: 'url("/images/starrynight.jpg")',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparency for the background
        }}>
          {/* Shooting Star Effect */}
          <div className="shooting-star"></div>
          {children}
        </div>

      </body>
    </html>
  );
}
