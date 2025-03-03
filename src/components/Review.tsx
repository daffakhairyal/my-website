"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Dummy Data Testimoni
const testimonials = [
  {
    name: "Alex Johnson",
    review:
      "Daffa is an exceptional web developer. He transformed my business website into something outstanding!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sophia Williams",
    review:
      "I love my new website! It's fast, modern, and works flawlessly. Highly recommended!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "James Anderson",
    review:
      "Professional and efficient! Delivered a high-quality website on time. Very satisfied.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    review:
      "Amazing experience working with Daffa. His design and coding skills are top-notch!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Michael Brown",
    review:
      "Super responsive and delivered exactly what I needed. Fantastic service!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emma Wilson",
    review:
      "Daffa built my portfolio website, and it’s absolutely stunning. Couldn't be happier!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export default function Review() {
  return (
    <section className="flex flex-col items-center h-full w-full pt-16 pb-20 px-6 relative bg-gray-900 to-black text-white">
      {/* Judul Halaman */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center relative z-10"
      >
        What My Clients Say
      </motion.h2>

      {/* Grid Testimoni */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-lg hover:scale-105 transition-transform"
          >
            {/* Avatar & Nama */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
            </div>

            {/* Bintang Rating */}
            <div className="flex gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
              ))}
            </div>

            {/* Isi Testimoni */}
            <p className="italic">&quot;{testimonial.review}&quot;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
