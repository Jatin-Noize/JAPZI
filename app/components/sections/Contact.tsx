"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "hello@japzitechz.com",
      link: "mailto:hello@japzitechz.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94025",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business? Reach out to us and let's discuss 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass glass-hover rounded-xl p-6 flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:gradient-text transition-all duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["linkedin", "twitter", "facebook", "instagram"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 glass glass-hover rounded-full flex items-center justify-center"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {/* Name Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === "name" || formData.name ? -25 : 0,
                    scale: focusedField === "name" || formData.name ? 0.85 : 1,
                    color: focusedField === "name" ? "#06b6d4" : "#9ca3af",
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left"
                >
                  Your Name
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === "email" || formData.email ? -25 : 0,
                    scale: focusedField === "email" || formData.email ? 0.85 : 1,
                    color: focusedField === "email" ? "#06b6d4" : "#9ca3af",
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left"
                >
                  Email Address
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === "phone" || formData.phone ? -25 : 0,
                    scale: focusedField === "phone" || formData.phone ? 0.85 : 1,
                    color: focusedField === "phone" ? "#06b6d4" : "#9ca3af",
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left"
                >
                  Phone Number
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Company Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === "company" || formData.company ? -25 : 0,
                    scale: focusedField === "company" || formData.company ? 0.85 : 1,
                    color: focusedField === "company" ? "#06b6d4" : "#9ca3af",
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left"
                >
                  Company Name
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Service Select */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 text-gray-300"
                >
                  <option value="">Select a Service</option>
                  <option value="software">Software Development</option>
                  <option value="cloud">Cloud Infrastructure</option>
                  <option value="security">Cybersecurity</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="data">Data Analytics</option>
                  <option value="transformation">Digital Transformation</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focusedField === "message" || formData.message ? -25 : 0,
                    scale: focusedField === "message" || formData.message ? 0.85 : 1,
                    color: focusedField === "message" ? "#06b6d4" : "#9ca3af",
                  }}
                  className="absolute left-4 top-4 pointer-events-none origin-left"
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 glow-effect group"
              >
                <span className="flex items-center justify-center">
                  Send Message
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
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}