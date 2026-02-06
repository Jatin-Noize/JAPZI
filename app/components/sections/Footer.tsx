"use client";

import { motion } from "framer-motion";
import logo from "../../../app/images/logo.png"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Software Development", href: "#services" },
      { name: "Cloud Infrastructure", href: "#services" },
      { name: "Cybersecurity", href: "#services" },
      { name: "AI & ML", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="#home" className="flex items-center space-x-2 mb-6">
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

                <span className="text-xl font-bold gradient-text">
                  JAPZI TECHZ
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Empowering businesses with innovative IT solutions and cutting-edge 
                technology to drive digital transformation.
              </p>
              {/* Newsletter */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium text-sm glow-effect"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} JAPZI TECHZ. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { name: "LinkedIn", icon: "in" },
                { name: "Twitter", icon: "tw" },
                { name: "GitHub", icon: "gh" },
                { name: "Facebook", icon: "fb" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold group-hover:gradient-text transition-all duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>using Next.js</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}