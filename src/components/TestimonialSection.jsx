// Install Swiper via npm:
// npm install swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import spiritualBlob from "../../public/spritual-img.png";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The divine energy of Narmaeshwar Shivling transformed my spiritual journey...",
    experience: "Spiritual Transformation",
  },
  {
    id: 2,
    name: "Priya Devi",
    location: "Varanasi, Uttar Pradesh",
    rating: 5,
    text: "After establishing the Shivling, we experienced miraculous peace and prosperity.",
    experience: "Divine Presence",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ujjain, Madhya Pradesh",
    rating: 5,
    text: "This sacred stone has truly deepened our connection with Lord Shiva.",
    experience: "Blessed Connection",
  },
  {
    id: 4,
    name: "Sita Agarwal",
    location: "Rishikesh, Uttarakhand",
    rating: 5,
    text: "Our prayers feel stronger and more powerful with the Shivling.",
    experience: "Stronger Prayers",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Haridwar, Uttarakhand",
    rating: 5,
    text: "I feel a divine presence in our home every day now.",
    experience: "Daily Blessings",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full h-full flex flex-col justify-between bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 text-center relative overflow-hidden hover:scale-105 transition-transform duration-500 min-h-[360px]">
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-indigo-900/20 pointer-events-none" />
    <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-3 relative z-10">
      {testimonial.experience}
    </h3>
    <div className="flex justify-center gap-1 mb-3 relative z-10">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg sm:text-xl">
          ★
        </span>
      ))}
    </div>
    <blockquote className="text-gray-200 italic mb-5 text-sm sm:text-base relative z-10">
      "{testimonial.text}"
    </blockquote>
    <hr className="border-gray-700 mb-3 relative z-10" />
    <p className="font-semibold relative z-10 text-sm sm:text-base">
      {testimonial.name}
    </p>
    <p className="text-xs sm:text-sm text-gray-400 relative z-10">
      {testimonial.location}
    </p>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src={spiritualBlob}
              alt="Spiritual energy"
              className="w-16 h-12 object-contain animate-bounce"
            />
            <div>
              <h3 className="text-indigo-400 font-bold text-lg">DIVINE</h3>
              <p className="text-gray-400 text-sm">Testimonials</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span>Devotees Share Their </span>
            <span className="text-indigo-400">Sacred Experiences</span>
          </h2>
        </div>

        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">
            Experience the divine transformation through authentic Narmaeshwar
            Shivling worship.
          </p>
          <p>
            These sacred forms bring peace, clarity, and blessings from the holy
            Narmada river.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // breakpoints={{
          //   768: { slidesPerView: 2 },
          //   1024: { slidesPerView: 3 },
          // }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex h-full">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
