"use client";
import { useEffect, useRef } from "react";

export function Featured() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = ref.current;
    if (!vid) return;

    // Respect prefers-reduced-motion: pause if user prefers less motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      vid.pause();
      vid.removeAttribute("autoplay");
    }

    // Pause when off-screen to save CPU/battery
    const io = new IntersectionObserver(
      ([e]) => {
        if (!vid) return;
        if (e.isIntersecting) vid.play().catch(() => {});
        else vid.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(vid);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="
        relative w-full mx-auto
        /* Use aspect ratio for consistent scaling; cap height for short screens */
        aspect-video max-h-[78vh]
        /* On small phones, allow a taller space so it feels prominent */
        sm:aspect-video xs:aspect-[10/16] xs:max-h-[70vh]
      "
    >
      {/* Border/glow overlay (no layout shift, no pointer capture) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[20px]"
        style={{
          borderColor: "#6a23ddff",
          borderWidth: "10px",
          borderStyle: "solid",
          borderRadius: "20px",
          boxShadow: "0 0 20px 10px rgba(67, 22, 194, 0.88)",
        }}
      />

      <video
        ref={ref}
        className="w-full h-full object-cover rounded-[20px] z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        {/* Prefer modern codec first; MP4 as fallback */}
        <source src="/items/PortfolioVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
