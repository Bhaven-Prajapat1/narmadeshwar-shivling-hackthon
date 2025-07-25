import { motion } from "framer-motion";
import  LingamModel  from "./LingamModel";

const LandingPage = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const modelVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="bg-black min-h-screen pt-20">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div variants={textVariants} className="space-y-8">
            <motion.div variants={titleVariants} className="space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-700 leading-tight">
                Original
                <span className=" block bg-gradient-to-r from-gray-600 to-indigo-600 bg-clip-text text-transparent">
                  Narmada Shivling
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-indigo-500 rounded-full"></div>
            </motion.div>

            <motion.div
              variants={paragraphVariants}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                The <strong>Original Narmada Shivling</strong> is one of the
                most sacred and powerful symbols in Hindu spirituality,
                naturally formed in the holy Narmada River. These divine stones
                are believed to be self-manifested representations of Lord
                Shiva, carrying immense spiritual energy and blessings.
              </p>

              <p>
                Each Narmada Shivling is unique, shaped by the sacred waters
                over thousands of years. They are considered extremely
                auspicious for worship, meditation, and bringing positive energy
                into homes and temples. The smooth, oval shape represents the
                cosmic egg from which the universe emerged.
              </p>
            </motion.div>

            <motion.div
              variants={paragraphVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                "Divine Energy",
                "Spiritual Healing",
                "Inner Peace",
                "Prosperity",
              ].map((benefit, index) => (
                <motion.span
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-transparent hover:bg-gradient-to-r from-gray-600 to-indigo-600 text-gray-200 rounded-full text-sm font-medium border border-indigo-600"
                >
                  {benefit}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={paragraphVariants} className="pt-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 uppercase tracking-tight bg-gradient-to-r from-indigo-600 to-gray-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Discover Your Shivling
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Lingam Model */}
          <motion.div
            variants={modelVariants}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl scale-150"></div>

              {/* Model Container */}
              <div className="relative z-10">
                <LingamModel />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-orange-200/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  transition: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-200/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
