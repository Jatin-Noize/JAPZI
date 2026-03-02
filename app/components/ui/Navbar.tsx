"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { David_Libre } from "next/font/google";
import Image from "next/image";
import logo from "../../../app/images/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const david = David_Libre({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { name: "Home",         sectionIndex: 0 },
  { name: "Services",     sectionIndex: 1 },
  { name: "About",        sectionIndex: 2 },
  { name: "Why Us",       sectionIndex: 3 },
  { name: "Blog",         sectionIndex: 4 },
  { name: "Testimonials", sectionIndex: 5 },
  { name: "Contact",      sectionIndex: 6 },
];

// Utility: scroll to a pinned GSAP section by index
// With pinSpacing:false, each section's top = index * window.innerHeight
function scrollToSection(index: number) {
  const triggers = ScrollTrigger.getAll();
  const targetTrigger = triggers[index];

  if (targetTrigger) {
    gsap.to(window, {
      scrollTo: targetTrigger.start,
      duration: 1.1,
      ease: "power3.inOut",
    });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll to highlight active nav item & glass effect
 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;

    const current = Math.round(scrollY / sectionHeight);
    setActiveIndex(Math.min(current, navLinks.length - 1));

    setIsScrolled(scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      scrollToSection(index);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={(e) => handleNavClick(e as any, 0)}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center glow-effect">
                <Image
                  src={logo}
                  alt="JAPZI TECHZ Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text">
                JAPZI TECHZ
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={(e) => handleNavClick(e, link.sectionIndex)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group
                    ${activeIndex === link.sectionIndex
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300
                      ${activeIndex === link.sectionIndex ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className={`hidden lg:block ${david.className}`}
          >
            <button
              onClick={(e) => handleNavClick(e, 6)}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 glow-effect"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glass-hover"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full block"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link.sectionIndex)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                      ${activeIndex === link.sectionIndex
                        ? "text-white bg-white/15"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  onClick={(e) => handleNavClick(e, 6)}
                  className="w-full px-4 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium text-center glow-effect"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}