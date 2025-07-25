// JyotirlingaMarquee.jsx
import Marquee from "react-fast-marquee";

// Shivlings list (image paths fixed)
export const shivlings = [
  {
    name: "Somnath",
    price: "₹1000",
    image: "/img-1.webp",
  },
  {
    name: "Mallikarjuna",
    price: "₹1200",
    image: "/img-2.webp",
  },
  {
    name: "Mahakaleshwar",
    price: "₹1100",
    image: "/img-3.webp",
  },
  {
    name: "Omkareshwar",
    price: "₹1300",
    image: "/img-4.webp",
  },
  {
    name: "Kedarnath",
    price: "₹1150",
    image: "/img-5.webp",
  },
  {
    name: "Bhimashankar",
    price: "₹1250",
    image: "/img-6.webp",
  },
  {
    name: "Kashi Vishwanath",
    price: "₹1350",
    image: "/img-7.webp",
  },
  {
    name: "Trimbakeshwar",
    price: "₹1400",
    image: "/img-8.webp",
  },
  {
    name: "Vaidyanath",
    price: "₹1050",
    image: "/img-9.webp",
  },
  {
    name: "Nageshwar",
    price: "₹950",
    image: "/img-10.webp",
  },
  {
    name: "Rameshwar",
    price: "₹900",
    image: "/img-11.webp",
  },
  {
    name: "Grishneshwar",
    price: "₹1100",
    image: "/img-12.webp",
  },
];

function JyotirlingaMarquee() {
  return (
    <div className="w-full min-h-screen bg-black py-6">
      <h2 className="text-3xl text-gray-400 font-semibold text-center mb-6">
        Types of Shivlings We Have
      </h2>

      <Marquee pauseOnHover speed={70} gradient={false}>
        {shivlings.map((item, index) => (
          <div
            key={index}
            className="group relative w-64 h-80 m-4 overflow-hidden rounded-xl shadow-lg hover:border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white text-center py-4 transition-all duration-500 transform group-hover:-translate-y-5">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg font-medium">Price: {item.price}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default JyotirlingaMarquee;
