import { useEffect, useState } from "react";
import spiritualBlob from "../../public/spritual-img.png";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The divine energy of Narmaeshwar Shivling transformed my spiritual journey. The sacred vibrations brought unprecedented peace and prosperity to my family.",
    experience: "Spiritual Transformation",
  },
  {
    id: 2,
    name: "Priya Devi",
    location: "Varanasi, Uttar Pradesh",
    rating: 5,
    text: "After establishing the Narmaeshwar Shivling in our home temple, we experienced miraculous changes. Lord Shiva's blessings have been abundant.",
    experience: "Divine Blessings",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ujjain, Madhya Pradesh",
    rating: 5,
    text: "The authenticity and spiritual power of this Narmaeshwar Shivling is extraordinary. Daily worship has brought clarity and success in all endeavors.",
    experience: "Success & Clarity",
  },
  {
    id: 4,
    name: "Sita Agarwal",
    location: "Rishikesh, Uttarakhand",
    rating: 5,
    text: "As a devoted follower of Lord Shiva, I can attest to the genuine divine presence in this Narmaeshwar Shivling. Truly blessed by Mahadev.",
    experience: "Divine Presence",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Haridwar, Uttarakhand",
    rating: 5,
    text: "The sacred Narmada stone carries immense spiritual energy. Our meditation practice has deepened significantly since we welcomed this divine form.",
    experience: "Enhanced Meditation",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="bg-black text-white py-20 px-4 md:px-6 lg:px-8 relative">
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
            Experience the divine transformation through authentic Narmaeshwar Shivling worship.
            These sacred forms bring peace, clarity, and blessings from the holy Narmada river.
          </p>
          <p>
            Read from the voices of those who have truly experienced spiritual energy in their
            lives.
          </p>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-2xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold text-indigo-400 mb-4">{testimonial.experience}</h3>

        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>

        <blockquote className="text-gray-200 italic mb-6">"{testimonial.text}"</blockquote>

        <hr className="border-gray-700 mb-4" />

        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.location}</p>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-8 gap-4">
        {/* <button
          onClick={prev}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm"
        >
          ⬅ Prev  
        </button> */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-indigo-500 scale-125" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
        {/* <button
          onClick={next}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm"
        >
          Next ➡
        </button> */}
      </div>
    </section>
  );
};

export default TestimonialSection;
