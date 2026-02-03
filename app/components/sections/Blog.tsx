"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blogPosts = [
  {
    category: "Cloud Computing",
    title: "The Future of Cloud Infrastructure in 2026",
    excerpt: "Discover how emerging cloud technologies are reshaping business operations and what it means for your organization.",
    author: "Sarah Johnson",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "Cybersecurity",
    title: "Zero Trust Architecture: A Comprehensive Guide",
    excerpt: "Learn how zero trust security models can protect your organization from modern cyber threats.",
    author: "Michael Chen",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "AI & ML",
    title: "Leveraging AI for Business Automation",
    excerpt: "Explore practical applications of artificial intelligence that can streamline your business processes.",
    author: "Emily Rodriguez",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    gradient: "from-cyan-500 to-green-500",
  },
  {
    category: "DevOps",
    title: "Continuous Integration Best Practices",
    excerpt: "Master the art of CI/CD pipelines and accelerate your software delivery process.",
    author: "David Kim",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Digital Transformation",
    title: "Legacy System Modernization Strategies",
    excerpt: "Step-by-step guide to modernizing legacy systems without disrupting business operations.",
    author: "Lisa Anderson",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    category: "Software Development",
    title: "Microservices vs Monolithic Architecture",
    excerpt: "A detailed comparison to help you choose the right architecture for your next project.",
    author: "James Wilson",
    date: "Jan 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    gradient: "from-teal-500 to-blue-500",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            Latest Insights
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tech <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in 
            technology and digital transformation.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 text-xs font-semibold text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-cyan-400"
                    >
                      <svg
                        className="w-5 h-5"
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
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass glass-hover rounded-lg text-white font-semibold border border-cyan-500/50 group">
            <span className="flex items-center">
              View All Articles
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
          </button>
        </motion.div>
      </div>
    </section>
  );
}