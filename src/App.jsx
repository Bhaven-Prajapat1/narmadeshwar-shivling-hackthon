import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import JyotirlingaMarquee from "./components/JyotirlingaMarquee";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/NavBar";
import ScrollContainer from "./components/ScrollContainer";
import TestimonialSection from "./components/TestimonialSection";
const lines = ["Welcome to", "Sacred", "Narmadeshwar Shivling"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

const backgroundVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const SplashScreen = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden"
  >
    {/* Background Image */}
    <motion.div variants={backgroundVariants} className="absolute inset-0 z-0">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/41/ff/8f/41ff8fee4a9a90f834e2dcfb9d2e1148.jpg')`,
        }}
      />
      {/* Dark overlay for better text readability */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
      />
    </motion.div>

    {/* Animated particles/dots */}
    <div className="absolute inset-0 z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>

    {/* Content */}
    <div className="relative z-20 text-center px-4">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={lineVariants}
          className={`${
            index === 0
              ? "text-2xl md:text-3xl text-gray-400 font-medium mb-2"
              : index === 1
              ? "text-3xl md:text-4xl text-gray-500 font-bold mb-1"
              : "text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-gray-400 to-indigo-900 bg-clip-text text-transparent"
          }`}
        >
          {line}
        </motion.div>
      ))}

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="text-gray-100 text-lg md:text-xl mt-4 font-light"
      >
        Divine Stones from Holy Narmada River
      </motion.p>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mt-8 flex items-center justify-center space-x-2"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-indigo-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>

    {/* Decorative elements */}
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 0.1, rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-10 right-10 w-32 h-32 border border-orange-400/20 rounded-full z-10"
    />
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 0.1, rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-10 left-10 w-24 h-24 border border-yellow-400/20 rounded-full z-10"
    />
  </motion.div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500); // Extended for better experience
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full min-h-screen bg-gray-950"
        >
            <Navbar />
            <LandingPage />
            <Gallery />
            <JyotirlingaMarquee />
            <TestimonialSection />
            <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
