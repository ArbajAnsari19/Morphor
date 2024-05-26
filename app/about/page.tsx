"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex flex-col justify-center items-center font-roboto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to Morpher
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Morpher is your go-to solution for seamless multimedia transformation. Whether you're a content creator, business professional, or hobbyist, Morpher empowers you to convert images, audio files, and videos effortlessly. Say goodbye to compatibility issues and hello to boundless creative possibilities.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div 
            className="bg-white rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Image Conversion 🖼️</h2>
            <p className="text-gray-700 leading-relaxed">
              Morpher's image conversion tool allows you to manipulate images with ease. Whether you need to resize, crop, or adjust formats, Morpher has you covered. Transform your visuals effortlessly.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Audio Transformation 🎵</h2>
            <p className="text-gray-700 leading-relaxed">
              Elevate your audio projects with Morpher's conversion capabilities. Convert audio files between formats like MP3, WAV, or AAC. Customize bitrates, trim, and merge audio files to create your perfect soundtrack.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Video Metamorphosis 🎥</h2>
            <p className="text-gray-700 leading-relaxed">
              Lights, camera, action! Edit and transcode videos without limits. From changing video formats to cutting and merging clips, Morpher enables you to create stunning video content for any platform or purpose.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Accessible Anywhere 🌐</h2>
            <p className="text-gray-700 leading-relaxed">
              Morpher is accessible from any device with an internet connection. Whether you're on your computer, tablet, or smartphone, enjoy seamless access to Morpher's powerful conversion tools.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg p-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Secure and Private 🔒</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy and security are our top priorities. Rest assured that Morpher treats your multimedia files with utmost care, ensuring they remain yours alone.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">It's Free, It's Powerful, It's Morpher 🌟</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Unlock the unlimited potential of Morpher and revolutionize your multimedia projects today. Join and lets share to millions of users to trust Morpher for their conversion needs.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
