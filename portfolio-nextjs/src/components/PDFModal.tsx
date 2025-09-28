"use client";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type Props = { open: boolean; onClose: () => void; src: string; title?: string };

export default function PDFModal({ open, onClose, src, title = "Resume" }: Props) {
  const [mounted, setMounted] = useState(false);
  const [failedInline, setFailedInline] = useState(false);

  function getMaxTouchPoints(nav: Navigator): number {
  return "maxTouchPoints" in nav && typeof (nav as { maxTouchPoints?: number }).maxTouchPoints === "number"
    ? (nav as { maxTouchPoints: number }).maxTouchPoints
    : 0;
}

const isIOS = useMemo(() => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isiOS = /iPad|iPhone|iPod/.test(ua);
  const isIPadOS = navigator.platform === "MacIntel" && getMaxTouchPoints(navigator) > 1;
  return isiOS || isIPadOS;
}, []);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", esc);
      // iOS Safari: open in new tab instead of inline (most reliable)
      if (isIOS) {
        window.open(src, "_blank", "noopener,noreferrer");
        // keep modal open so user can still hit Download if popup blocked
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", esc);
      setFailedInline(false);
    };
  }, [open, onClose, isIOS, src]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-[92vw] max-w-5xl h-[85svh] bg-[var(--background)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 p-3 border-b border-white/10">
          <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-1 text-sm bg-white/10 hover:bg-white/20"
            >
              Open in new tab
            </a>
            <a
              href={src}
              download
              className="rounded-md px-3 py-1 text-sm bg-white/10 hover:bg-white/20"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="rounded-md px-2 py-1 text-sm bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Inline render area */}
        {!failedInline ? (
          <object
            data={src + "#view=FitH"}
            type="application/pdf"
            className="w-full h-full"
            onError={() => setFailedInline(true)}
          >
          </object>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 h-full text-center p-6">
            <p className="text-[var(--foreground)]/80">
              Your browser doesn’t support inline PDF viewing.
            </p>
            <div className="flex gap-3">
              <a href={src} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">
                Open in new tab
              </a>
              <a href={src} download className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
