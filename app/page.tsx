"use client";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Blog from "./components/sections/Blog";
import Starter from "./components/sections/Starter";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SECTIONS = [
  { id: "hero",         Component: Hero,         bg: "#0a0a0f" },
  { id: "services",     Component: Services,     bg: "#0d0f1a" },
  { id: "about",        Component: About,        bg: "#0f1116" },
  { id: "whychooseus",  Component: WhyChooseUs,  bg: "#0b0d15" },
  { id: "blog",         Component: Blog,         bg: "#0e0f18" },
  { id: "testimonials", Component: Testimonials, bg: "#0c0e14" },
  { id: "contact",      Component: Contact,      bg: "#090b12" },
];

function NavDot({
  active,
  index,
  onClick,
}: {
  active: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Go to section ${index + 1}`}
      style={{
        width: active ? "28px" : "8px",
        height: "8px",
        borderRadius: "4px",
        background: active ? "rgba(100,150,255,0.9)" : "rgba(255,255,255,0.2)",
        border: "none",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        padding: 0,
        flexShrink: 0,
      }}
    />
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Store pin trigger start positions for accurate scrollTo
  const pinStartsRef = useRef<number[]>([]);

  useEffect(() => {
    if (loading) return;

    // Wait for DOM paint before measuring
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        pinStartsRef.current = [];

        sectionRefs.current.forEach((el, i) => {
          if (!el) return;

          // ── PIN: keeps pinSpacing:true so document flow is real ──────
          const pinTrigger = ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onEnter: () => setActiveSection(i),
            onEnterBack: () => setActiveSection(i),
            onRefresh(self) {
              // Record the real scroll position where this pin starts
              pinStartsRef.current[i] = self.start;
            },
          });

          // ── SCALE DOWN as next section slides over ───────────────────
          if (i < SECTIONS.length - 1) {
            const next = sectionRefs.current[i + 1];
            if (next) {
              gsap.to(el, {
                scale: 0.93,
                filter: "brightness(0.6)",
                borderRadius: "20px",
                ease: "none",
                scrollTrigger: {
                  trigger: next,
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.5,
                },
              });
            }
          }

          // ── SLIDE UP each section into view ─────────────────────────
          if (i > 0) {
            gsap.fromTo(
              el,
              { y: 80, opacity: 0.75 },
              {
                y: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.5,
                },
              }
            );
          }
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, [loading]);

  // Accurate scroll-to using recorded pin start positions
  const scrollToSection = (i: number) => {
    const target = pinStartsRef.current[i] ?? i * window.innerHeight;
    gsap.to(window, {
      scrollTo: target,
      duration: 1.1,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      {/* Starter intro */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="starter"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          >
            <Starter onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Side nav dots — hidden on mobile */}
            <div
              style={{
                position: "fixed",
                right: "clamp(10px, 2.5vw, 26px)",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 200,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
              className="hidden sm:flex"
            >
              {SECTIONS.map((_, i) => (
                <NavDot
                  key={i}
                  index={i}
                  active={activeSection === i}
                  onClick={() => scrollToSection(i)}
                />
              ))}
            </div>

            {/* Stacked sections */}
            <div style={{ position: "relative" }}>
              {SECTIONS.map(({ id, Component, bg }, i) => (
                <div
                  key={id}
                  ref={(el) => { sectionRefs.current[i] = el; }}
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    background: bg,
                    zIndex: i + 1,
                    overflow: "hidden",
                    boxSizing: "border-box",
                    borderRadius: i === 0 ? "0" : "16px 16px 0 0",
                    boxShadow:
                      i > 0
                        ? "0 -12px 50px rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.05)"
                        : "none",
                    willChange: "transform, opacity, filter, border-radius",
                  }}
                >
                  {/* Top edge highlight */}
                  {i > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "8%",
                        right: "8%",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, rgba(120,160,255,0.3), transparent)",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
                    <Component />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        html {
          scroll-behavior: auto !important;
        }
        body {
          margin: 0;
          padding: 0;
          background: #0a0a0f;
          overflow-x: hidden;
        }
        @media (max-width: 768px) {
          /* Tighter corner radius on mobile */
          [style*="border-radius: 16px"] {
            border-radius: 10px 10px 0 0 !important;
          }
        }
      `}</style>
    </>
  );
}