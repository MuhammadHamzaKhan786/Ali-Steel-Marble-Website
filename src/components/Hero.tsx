'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ali Steel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            All Kinds of Marble & Steel Railing Fitting Works
          </p>
          <motion.button
            onClick={scrollToGallery}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
}