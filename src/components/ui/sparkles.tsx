"use client";
import React, { useId, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const generatedId = useId();

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      updateCanvasSize();

      const width = canvas.width;
      const height = canvas.height;

      const density = particleDensity || 100;
      particles.current = [];
      for (let i = 0; i < density; i++) {
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize || 1) + (minSize || 0.1),
          speedX: (Math.random() - 0.5) * (speed || 1),
          speedY: (Math.random() - 0.5) * (speed || 1),
        });
      }
    };

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor || "#000000";

      particles.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (canvasRef.current) {
      initParticles();
      animate();
    }

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn("h-full w-full", className)}
    >
      <canvas
        ref={canvasRef}
        id={id || generatedId}
        style={{
          background: background || "transparent",
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
};
