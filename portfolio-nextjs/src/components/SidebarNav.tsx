// SidebarNav.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SidebarNav({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    if (open) el.classList.add("overflow-hidden");
    else el.classList.remove("overflow-hidden");
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="only-desktop fixed left-0 top-0 h-screen w-50 nav-glass nav-gold z-40 
  flex flex-col items-center px-3 py-6">
        <div className="text-xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent dark:from-fuchsia-400 dark:via-purple-400 dark:to-indigo-300">
            <h1 className="text-4xl font-bold text-purple-600 text-center" style={{ fontFamily: '"Brush Script MT", cursive' }}>Ming Kai</h1>
            <h1 className="text-3xl mt-4 font-semibold text-purple-400 text-center" style={{ fontFamily: '"Brush Script MT", cursive' }}>铭 凯</h1>
          </span>
        </div>

        {/* <button onClick={toggleTheme} className="absolute top-4 right-4 p-3 rounded-full z-50 transition-all" aria-label="Toggle theme">
          {theme === "light" ? <FiSun size={24} className="text-yellow-500 glow" /> : <FiMoon size={24} className="text-indigo-400 glow" />}
        </button> */}

        <nav className="flex-1 flex flex-col gap-2">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link w-full text-center py-2 rounded-md text-[0.95rem] 
             text-slate-700 hover:text-amber-700 
             dark:text-slate-200 dark:hover:text-violet-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Top Navbar */}
      <div className="only-mobile fixed top-0 left-0 right-0 h-14 nav-glass z-40 flex items-center justify-between px-4">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="p-2"
        >
          <FiMenu size={22} />
        </button>
        <div className="text-lg font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent dark:from-fuchsia-400 dark:via-purple-400 dark:to-indigo-300">
            MK
          </span>
        </div>
      </div>


      {/* Mobile Menu Popup */}<>
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
                transition-opacity duration-300
                ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!open}
        />

        {/* Drawer (from the left) */}
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 left-0 h-full w-[78%] max-w-[320px] nav-glass z-50
                border-r border-white/20 dark:border-white/10 p-4 flex flex-col
                transition-transform duration-300 ease-in-out transform
                ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between h-10 mb-2">
            <div className="text-lg font-bold">Ming Kai</div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2"
            >
              <FiX size={22} />
            </button>
          </div>

          <nav className="mt-2 flex-1 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link px-3 py-3 rounded-md text-base 
                     text-slate-800 hover:text-amber-700 
                     dark:text-slate-100 dark:hover:text-violet-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </>


    </>
  );
}
