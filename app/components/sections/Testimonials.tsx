"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Martinez",
    position: "CTO, TechCorp Solutions",
    company: "TechCorp",
    content: "JAPZI TECHZ transformed our entire infrastructure. Their cloud migration expertise saved us 40% on operational costs while improving performance by 3x. Absolutely phenomenal work!",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sarah Williams",
    position: "CEO, Digital Innovations",
    company: "Digital Innovations",
    content: "Working with JAPZI TECHZ was a game-changer for our startup. They delivered a robust, scalable platform that allowed us to grow from 1,000 to 100,000 users seamlessly.",
    rating: 5,
    avatar: "SW",
  },
  {
    name: "Michael Chen",
    position: "VP of Engineering, CloudFirst Inc",
    company: "CloudFirst Inc",
    content: "The security audit and implementation by JAPZI TECHZ was thorough and professional. They identified vulnerabilities we didn't know existed and fixed them promptly.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateTech",
    company: "InnovateTech",
    content: "Outstanding development team! They understood our vision perfectly and delivered beyond expectations. The AI-powered features they built are getting rave reviews from our users.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Thompson",
    position: "Director of IT, Global Enterprises",
    company: "Global Enterprises",
    content: "JAPZI TECHZ's DevOps expertise helped us reduce deployment time from weeks to hours. Their automation solutions have been a tremendous productivity boost for our team.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Lisa Anderson",
    position: "Founder, StartupXYZ",
    company: "StartupXYZ",
    content: "From concept to launch, JAPZI TECHZ was with us every step of the way. Their technical guidance and rapid development capabilities helped us beat our competitors to market.",
    rating: 5,
    avatar: "LA",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            Client Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses that have experienced 
            the JAPZI TECHZ difference.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] mb-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-6xl text-cyan-400/20">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold glow-effect">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-cyan-400 text-sm">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-3 glass glass-hover rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-cyan-500 to-purple-500"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-3 glass glass-hover rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "500+", label: "Projects Delivered" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Repeat Clients" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}