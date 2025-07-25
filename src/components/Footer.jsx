import { motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Heart,
  Instagram,
  Bot as Lotus,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Collection", href: "#collection" },
    { name: "Significance", href: "#significance" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Authentic Narmadeshwar Shivlings", href: "#authentic" },
    { name: "Custom Installations", href: "#installations" },
    { name: "Spiritual Guidance", href: "#guidance" },
    { name: "Puja Services", href: "#puja" },
    { name: "Shipping Worldwide", href: "#shipping" },
    { name: "Return Policy", href: "#returns" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t-1 border-t-gray-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-orange-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="p-2 bg-gradient-to-r from-indigo-400 to-gray-500 rounded-full"
              >
                <Lotus className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-indigo-500 bg-clip-text text-transparent">
                Narmadeshwar
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Sacred Narmadeshwar Shivlings from the holy Narmada River. Each
              piece carries divine energy and spiritual significance for your
              sacred space.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-indigo-400/50 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={service.href}
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Near Narmada Ghat
                    <br />
                    Omkeshwar, Madhya Pradesh
                    <br />
                    India - 451115
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">+91 12345 67890</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-300">info@narmadeshwar.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-300 text-sm">
              <span>© 2024 Narmadeshwar Shivling. Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>for devotees worldwide</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-300">
              <motion.a
                whileHover={{ y: -2 }}
                href="#privacy"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#terms"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Terms & Conditions
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#sitemap"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
