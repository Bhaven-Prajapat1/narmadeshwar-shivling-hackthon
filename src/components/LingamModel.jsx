import React from 'react';
import { motion } from 'framer-motion';

const LingamModel = () => {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const baseVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const lingamVariants = {
    initial: { y: -30, opacity: 0, scale: 0.9 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative flex items-center justify-center h-96 w-96 mx-auto"
    >
      {/* Glow Effect */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute inset-0 bg-gradient-radial from-orange-200/40 via-orange-100/20 to-transparent rounded-full blur-xl"
      />
      
      {/* Floating Container */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="relative"
      >
        {/* Base (Yoni) */}
        <motion.div
          variants={baseVariants}
          className="relative z-10"
        >
          {/* Base Platform */}
          <div className="w-48 h-16 bg-gradient-to-b from-stone-300 to-stone-500 rounded-full shadow-2xl relative overflow-hidden">
            {/* Base Texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-400/50 via-transparent to-stone-600/50 rounded-full" />
            <div className="absolute top-2 left-4 right-4 h-2 bg-gradient-to-r from-transparent via-stone-200/60 to-transparent rounded-full" />
          </div>
          
          {/* Base Ring */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-40 h-8 bg-gradient-to-b from-stone-400 to-stone-600 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-stone-500/50 via-transparent to-stone-700/50 rounded-full" />
          </div>
        </motion.div>

        {/* Lingam */}
        <motion.div
          variants={lingamVariants}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-32 z-20"
        >
          {/* Main Lingam Body */}
          <div className="relative">
            {/* Lingam Shape */}
            <div className="w-20 h-40 bg-gradient-to-b from-stone-600 via-stone-700 to-stone-800 rounded-t-full rounded-b-lg shadow-2xl relative overflow-hidden">
              {/* Surface Texture */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-500/30 via-transparent to-stone-900/30" />
              <div className="absolute top-4 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-stone-400/40 to-transparent rounded-full" />
              <div className="absolute top-8 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-stone-300/30 to-transparent rounded-full" />
              <div className="absolute top-12 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent rounded-full" />
              
              {/* Sacred Markings */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-300/60 rounded-full" />
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-orange-300/40 rounded-full" />
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-300/30 rounded-full" />
            </div>

            {/* Sacred Thread */}
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 border-2 border-orange-400/60 rounded-full"
              style={{ borderStyle: 'dashed' }}
            />
          </div>
        </motion.div>

        {/* Sacred Symbols */}
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-0"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/40 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateY(-120px) translateX(-4px)`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
        </motion.div>

        {/* Water Drops */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-2 bg-blue-300/60 rounded-full"
            style={{
              top: '-20px',
              left: `${45 + i * 5}%`,
              transform: 'translateX(-50%)'
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeIn"
              }
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LingamModel;