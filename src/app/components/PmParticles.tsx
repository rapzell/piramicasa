"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  opacity: number;
  opacityDir: number;
  opacitySpeed: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const COLORS = ["#C69C6D", "#5A6B4A", "#D88A5E", "#D4B896", "#B8956A"];

export default function PmParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particleCount = 0;

    const resize = () => {
      width = document.documentElement.scrollWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;

      const targetCount = Math.min(400, Math.floor((width * height) / 8000));
      particleCount = targetCount;

      if (particlesRef.current.length < particleCount) {
        while (particlesRef.current.length < particleCount) {
          particlesRef.current.push(createParticle(width, height));
        }
      } else {
        particlesRef.current = particlesRef.current.slice(0, particleCount);
      }
    };

    const createParticle = (w: number, h: number): Particle => {
      const baseRadius = 3 + Math.random() * 14;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: baseRadius,
        baseRadius,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.2 + Math.random() * 0.35,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        opacitySpeed: 0.002 + Math.random() * 0.004,
        pulseSpeed: 0.003 + Math.random() * 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX + window.scrollX, y: e.clientY + window.scrollY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    let resizeTimer: number | undefined;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    };

    resize();
    window.addEventListener("resize", debouncedResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        p.opacity += p.opacityDir * p.opacitySpeed;
        if (p.opacity <= 0.12) {
          p.opacity = 0.12;
          p.opacityDir = 1;
        }
        if (p.opacity >= 0.55) {
          p.opacity = 0.55;
          p.opacityDir = -1;
        }

        p.pulsePhase += p.pulseSpeed;
        p.radius = p.baseRadius * (1 + Math.sin(p.pulsePhase) * 0.15);

        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let bubbleBoost = 0;
        let bubbleOpacity = 0;
        if (dist < 120) {
          const factor = 1 - dist / 120;
          bubbleBoost = factor * 10;
          bubbleOpacity = factor * 0.15;
        }

        const drawRadius = p.radius + bubbleBoost;
        const drawOpacity = Math.min(0.65, p.opacity + bubbleOpacity);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, drawRadius);
        const hex = p.color;
        gradient.addColorStop(0, `${hex}${Math.floor(drawOpacity * 255).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(0.5, `${hex}${Math.floor(drawOpacity * 120).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(1, `${hex}00`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pm-particles-bg"
    />
  );
}
