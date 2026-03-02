"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface StarterProps {
  onComplete: () => void;
}

const Starter: React.FC<StarterProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillJRef = useRef<HTMLDivElement | null>(null);
  const fillPRef = useRef<HTMLDivElement | null>(null);
  const shimmerRef = useRef<HTMLDivElement | null>(null);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const [lineVisible, setLineVisible] = useState(false);
  const [dotsVisible, setDotsVisible] = useState(false);

  useEffect(() => {
    // Generate floating particles
    const p = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(p);
  }, []);

  useEffect(() => {
    if (!fillJRef.current || !fillPRef.current || !containerRef.current) return;

    const tl = gsap.timeline();

    // Staggered liquid fill
    tl.fromTo(
      fillJRef.current,
      { height: "0%", opacity: 0 },
      { height: "100%", opacity: 1, duration: 1.8, ease: "power3.inOut" }
    )
    .fromTo(
      fillPRef.current,
      { height: "0%", opacity: 0 },
      { height: "100%", opacity: 1, duration: 1.8, ease: "power3.inOut" },
      "-=1.4"
    );

    // Show decorative elements
    setTimeout(() => setLineVisible(true), 600);
    setTimeout(() => setDotsVisible(true), 1000);

    // Shimmer sweep
    if (shimmerRef.current) {
      gsap.fromTo(
        shimmerRef.current,
        { x: "-120%" },
        { x: "220%", duration: 1.2, ease: "power2.inOut", delay: 1.5 }
      );
    }

    // Fade out
    setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 1.1,
        ease: "power2.inOut",
        onComplete,
      });
    }, 3400);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(ellipse at 40% 50%, #0a0a14 0%, #000005 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Subtle grid texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,140,255,0.07) 0%, transparent 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(130, 170, 255, ${Math.random() * 0.4 + 0.1})`,
            pointerEvents: "none",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>

        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={lineVisible ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "320px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(120,160,255,0.6), transparent)",
            marginBottom: "8px",
          }}
        />

        {/* Letters row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          {/* J */}
          <div style={{ position: "relative" }}>
            <div style={{
              fontSize: "160px",
              fontWeight: 900,
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
              letterSpacing: "-4px",
              position: "relative",
              overflow: "hidden",
              userSelect: "none",
            }}>
              J
              {/* Liquid fill */}
              <div
                ref={fillJRef}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "0%",
                  background: "linear-gradient(180deg, #5b8bff 0%, #3a65e8 50%, #2248cc 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontSize: "160px",
                  fontWeight: 900,
                  letterSpacing: "-4px",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                J
                {/* Shimmer sweep on J */}
                <div
                  ref={shimmerRef}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "40%",
                    height: "100%",
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Separator dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={dotsVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "backOut" }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(120,160,255,0.6)",
              marginTop: "4px",
            }}
          />

          {/* P */}
          <div style={{ position: "relative" }}>
            <div style={{
              fontSize: "160px",
              fontWeight: 900,
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
              letterSpacing: "-4px",
              position: "relative",
              overflow: "hidden",
              userSelect: "none",
            }}>
              P
              {/* Liquid fill */}
              <div
                ref={fillPRef}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "0%",
                  background: "linear-gradient(180deg, #a78bfa 0%, #7c5ce8 50%, #5a3acc 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontSize: "160px",
                  fontWeight: 900,
                  letterSpacing: "-4px",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                P
              </div>
            </div>
          </div>

        </div>

        {/* Bottom decorative elements */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={dotsVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(120,160,255,0.4))",
              transformOrigin: "right",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={dotsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "rgba(160,180,255,0.35)",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              fontWeight: 400,
            }}
          >
            Est. 2024
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={dotsVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(160,120,255,0.4), transparent)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={lineVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "24px",
            width: "200px",
            height: "2px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #3a65e8, #a78bfa)",
              borderRadius: "2px",
            }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Starter;