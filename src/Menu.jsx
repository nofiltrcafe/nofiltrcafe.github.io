import { motion } from "framer-motion";

const menu = [
  {
    name: "Cappuccino",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    name: "Latte",
    price: "$5.00",
    img: "https://images.unsplash.com/photo-1521305916504-4a1121188589"
  },
  {
    name: "Espresso",
    price: "$3.00",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
  },
];

export default function Menu() {
  return (
    <div id="menu" className="bg-[#1F1F1F] py-24 px-6">

      <h2 className="text-4xl text-white text-center font-bold mb-16">
        Our Menu
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {menu.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={item.img} className="h-64 w-full object-cover" />

            <div className="p-5">
              <h3 className="text-xl text-white font-semibold">
                {item.name}
              </h3>
              <p className="text-amber-400 font-bold mt-2">
                {item.price}
              </p>

              <button className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}