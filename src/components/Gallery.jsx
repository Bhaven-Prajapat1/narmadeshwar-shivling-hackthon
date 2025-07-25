import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/4 inch narmada shivling.webp",
  "/black marrble shivling.jpg",
  "/black narmada stone.webp",
  "/complete set shivling.webp",
  "/narmadeshwar shivling.webp",
  "/imgi_173_narmada-shivling-1000x1000.jpg",
  "/510+qaLmvKL.jpg",
  "/71dwtl0SH8L._SL1500_.jpg",
  "/complete set shivling.webp",
];

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="
        flex flex-col gap-4
        w-full sm:w-1/2 lg:w-1/4
        min-h-full
      "
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="
            relative
            h-48 sm:h-64 md:h-80 lg:h-96
            overflow-hidden
            rounded-lg
            shadow-lg
            hover:shadow-xl
            transition-shadow
            duration-300
          "
        >
          <img
            src={src}
            alt={`Shivling image ${i + 1}`}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              hover:scale-105
              transition-transform
              duration-500
            "
          />
        </div>
      ))}
    </motion.div>
  );
};

const Gallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.7]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="h-40"></div>

      <div
        ref={gallery}
        className="w-full relative bg-black min-h-[420vh] overflow-hidden"
      >
        <div
          className="
            absolute inset-0
            flex flex-wrap
            justify-center gap-4
            p-4
            md:gap-6 md:p-6
            lg:gap-8 lg:p-8
            h-[120%]
            -top-[10%]
            overflow-visible
          "
        >
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
        </div>
      </div>

      {/* Reviews Section */}
      <motion.div
        className="px-4 py-16 text-gray-100 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">What Our Devotees Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-4 rounded-xl shadow-md"
          >
            "I felt a divine energy the moment the Narmadeshwar Shivling arrived. Truly sacred."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-4 rounded-xl shadow-md"
          >
            "Authentic and powerful. The packaging and energy was beyond expectations."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-4 rounded-xl shadow-md"
          >
            "Blessed to have this Shivling in my pooja room. A must for all Shiva bhakts."
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
};

export default Gallery;
