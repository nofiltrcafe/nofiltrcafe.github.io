import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const targetDate = useMemo(() => new Date("2026-07-03T00:00:00"), []);

  const calculateTimeLeft = () => {
    const now = new Date();
    const distance = Math.max(0, targetDate.getTime() - now.getTime());

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="justify-items-center grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {units.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: "0 14px 44px rgba(200,162,124,0.18)", transition: { duration: 0.28 } }}
            animate={{ boxShadow: ["0 0 0 rgba(200,162,124,0)", "0 0 22px rgba(200,162,124,0.14)", "0 0 0 rgba(200,162,124,0)"] }}
            className="w-full max-w-[170px] rounded-3xl border border-[#C8A27C]/18 bg-[#6F4E37]/14 px-4 py-6 text-center backdrop-blur-sm sm:max-w-none sm:px-5"
          >
            <div className="font-serif text-5xl font-medium leading-none tracking-[0.02em] text-[#F5F5DC] md:text-7xl">{String(unit.value).padStart(2, "0")}</div>
            <div className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.4em] text-[#C8A27C]/82">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
