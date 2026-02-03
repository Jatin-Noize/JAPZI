"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description: "JAPZI TECHZ was founded with a vision to revolutionize IT solutions.",
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description: "Expanded our team to 20+ experts and served 100+ clients.",
  },
  {
    year: "2022",
    title: "Innovation Hub",
    description: "Launched our AI and Cloud services division.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opened offices in 3 new countries and reached 500+ projects.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as a top IT solutions provider with 98% client satisfaction.",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Innovation Meets <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses
            through innovative IT solutions and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: 500, suffix: "+", label: "Projects Completed" },
            { value: 50, suffix: "+", label: "Expert Team Members" },
            { value: 98, suffix: "%", label: "Client Satisfaction" },
            { value: 5, suffix: "+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded in 2020, JAPZI TECHZ emerged from a simple yet powerful vision: 
                to bridge the gap between cutting-edge technology and real-world business needs.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a 
                full-service IT solutions provider, serving clients across the globe with 
                innovative software development, cloud infrastructure, and digital transformation services.
              </p>
              <p>
                Today, we're proud to be recognized as industry leaders, consistently 
                delivering solutions that not only meet but exceed our clients' expectations, 
                with a 98% satisfaction rate that speaks to our commitment to excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2 gradient-text">Our Mission</h4>
                <p className="text-gray-400">
                  To empower businesses with innovative technology solutions that drive 
                  growth, efficiency, and competitive advantage in the digital age.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 gradient-text">Our Vision</h4>
                <p className="text-gray-400">
                  To be the world's most trusted technology partner, known for delivering 
                  transformative solutions that shape the future of business.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 gradient-text">Our Values</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Innovation First
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Client Success
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quality Excellence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Continuous Learning
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-6"
                  >
                    <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Point */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full glow-effect"></div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}