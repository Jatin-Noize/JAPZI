"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid development and deployment without compromising quality.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    description: "We focus on measurable outcomes that directly impact your bottom line and business goals.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    description: "Your data security is our top priority with industry-leading protection protocols.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: "💡",
    title: "Innovative Solutions",
    description: "Cutting-edge technologies and creative problem-solving for unique business challenges.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description: "24/7 expert support ensures your systems run smoothly at all times.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business and adapt to changing needs.",
    color: "from-indigo-400 to-purple-500",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="gradient-text">JAPZI TECHZ</span> Advantage
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner with a team that combines technical excellence with business acumen
            to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-6 inline-block"
                >
                  {reason.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${reason.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already experienced the JAPZI TECHZ difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 glow-effect group"
              >
                <span className="flex items-center">
                  Start Your Project
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#testimonials"
                className="px-8 py-4 glass glass-hover rounded-lg text-white font-semibold text-lg border border-white/20"
              >
                See Success Stories
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}