"use client";
import { useEffect, useRef } from "react";

type Props = {
  density?: number;          // stars per 10,000 px²
  starColor?: string;        // normal stars
  shootColor?: string;       // shooting star color
  maxSpeed?: number;         // star drift speed
  shootingEveryMs?: number;  // average interval between shooting stars
};

export default function Starfield({
  density = 0.12,
  starColor = "rgba(255,255,255,0.9)",
  shootColor = "rgba(180,200,255,0.9)",
  maxSpeed = 0.06,
  shootingEveryMs = 3000,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<{x:number;y:number;z:number;vx:number;vy:number;r:number}[]>([]);
  const shootRef = useRef<{t:number;active:boolean;x:number;y:number;vx:number;vy:number} | null>(null);
  const lastShootRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let width = 0, height = 0, last = performance.now();

    const prefersReduced = typeof window !== "undefined" &&
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement!;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.max(1, width);
      canvas.height = Math.max(1, height);

      // generate stars based on area
      const target = Math.floor((width * height) / 10000 * density);
      const arr = [];
      for (let i = 0; i < target; i++) {
        const r = Math.random() * 1.2 + 0.3;
        const speed = Math.random() * maxSpeed + 0.01;
        const angle = Math.random() * Math.PI * 2;
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.7 + 0.3,   // depth
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r,
        });
      }
      starsRef.current = arr;
    };

    const draw = (now: number) => {
      const dt = Math.min(33, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      // soft vignette background (very subtle)
      const grd = ctx.createRadialGradient(width*0.5, height*0.4, 0, width*0.5, height*0.4, Math.max(width, height));
      grd.addColorStop(0, "rgba(10,10,25,0.35)");
      grd.addColorStop(1, "rgba(0,0,0,0.9)");
      ctx.fillStyle = grd;
      ctx.fillRect(0,0,width,height);

      // stars
      ctx.fillStyle = starColor;
      const stars = starsRef.current;
      for (let s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // wrap
        if (s.x < -2) s.x = width + 2;
        if (s.x > width + 2) s.x = -2;
        if (s.y < -2) s.y = height + 2;
        if (s.y > height + 2) s.y = -2;

        const radius = s.r * s.z;
        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // shooting star (occasionally)
      if (!prefersReduced) {
        const nowMs = performance.now();
        if (!shootRef.current || !shootRef.current.active) {
          if (nowMs - lastShootRef.current > shootingEveryMs + (Math.random()*shootingEveryMs)) {
            lastShootRef.current = nowMs;
            const angle = (Math.random()*0.35 + 0.2) * Math.PI; // diagonal
            const speed = Math.random()*0.9 + 0.8; // px/ms
            shootRef.current = {
              t: 0,
              active: true,
              x: Math.random() * (width * 0.3),
              y: Math.random() * (height * 0.4),
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
            };
          }
        } else {
          const sh = shootRef.current;
          sh!.t += dt;
          sh!.x += sh!.vx * dt;
          sh!.y += sh!.vy * dt;

          // trail
          const trail = 140; // length in px
          const nx = -sh!.vx, ny = -sh!.vy;
          const len = Math.hypot(nx, ny) || 1;
          const ux = (nx/len), uy = (ny/len);

          const endX = sh!.x + ux * trail;
          const endY = sh!.y + uy * trail;

          const grad = ctx.createLinearGradient(sh!.x, sh!.y, endX, endY);
          grad.addColorStop(0, shootColor);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(sh!.x, sh!.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // deactivate when out of view
          if (sh!.x > width+50 || sh!.y > height+50) {
            sh!.active = false;
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [density, starColor, shootColor, maxSpeed, shootingEveryMs]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 block"
      aria-hidden
    />
  );
}
