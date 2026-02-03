"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and cost-effective cloud solutions for modern businesses.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets from threats.",
    features: ["Penetration Testing", "Security Audits", "Compliance"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Harness the power of AI to automate processes and gain insights.",
    features: ["Predictive Analytics", "NLP", "Computer Vision"],
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for better decision-making.",
    features: ["Business Intelligence", "Data Visualization", "Big Data"],
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: "🚀",
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business.",
    features: ["Process Automation", "Legacy Modernization", "Innovation Strategy"],
    gradient: "from-orange-500 to-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
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
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology services designed to accelerate your digital journey
            and drive sustainable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
            //   variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass glass-hover rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-6 inline-block"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-cyan-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-cyan-400 font-semibold flex items-center group/btn"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
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
                </motion.button>

                {/* Card Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Don't see what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 glass glass-hover rounded-lg text-white font-semibold border border-cyan-500/50 group"
          >
            Discuss Your Project
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}