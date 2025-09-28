"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = { open: boolean; onClose: () => void; src: string; title?: string };

export default function PDFModal({ open, onClose, src, title = "Resume" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center" onMouseDown={onClose} aria-modal="true" role="dialog">
      <div className="w-[92vw] max-w-5xl h-[85vh] bg-[var(--background)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-3 p-3 border-b border-white/10">
          <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={src}
              download
              className="rounded-md px-3 py-1 text-sm bg-white/10 hover:bg-white/20"
            >
              Download
            </a>
            <button onClick={onClose} className="rounded-md px-2 py-1 text-sm bg-white/10 hover:bg-white/20" aria-label="Close">✕</button>
          </div>
        </div>
        <div className="flex-1">
          <iframe src={src + "#view=FitH"} className="w-full h-full" title={title} />
        </div>
      </div>
    </div>,
    document.body
  );
}
