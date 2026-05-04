import { motion, useScroll, useTransform } from "framer-motion";
import Countdown from "./Countdown";

const vibes = [
  { id: "01", icon: "COF", title: "Specialty Coffee", desc: "Espresso · Latte · Cappuccino" },
  { id: "02", icon: "FOOD", title: "Delicious Food", desc: "Burgers · Sandwiches" },
  { id: "03", icon: "MIX", title: "Savory Mocktails", desc: "Hand-muddled · Refreshing" },
  { id: "04", icon: "LIVE", title: "Live Music", desc: "Guitar · Piano · Light sets" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <main className="relative text-[#F5F5DC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap');
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Coffeeshopbg.jpg')", y: bgY }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120b09]/90 via-[#1a100d]/52 to-[#1f120e]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,162,124,0.18),transparent_44%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.36)_100%)]" />

        <motion.div
          animate={{ opacity: [0.08, 0.17, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 30%, rgba(200,162,124,0.18) 0, transparent 2px), radial-gradient(circle at 72% 60%, rgba(200,162,124,0.13) 0, transparent 2px), radial-gradient(circle at 45% 80%, rgba(245,245,220,0.08) 0, transparent 1.5px)",
            backgroundSize: "180px 180px, 220px 220px, 160px 160px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-16 text-center"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <p className="rounded-full border border-white/20 bg-white/12 px-5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.62em] text-[#C8A27C]/95 shadow-[0_0_22px_rgba(245,245,220,0.16)] backdrop-blur-md sm:text-xs">
            Something Premium Is Brewing
          </p>

          <div className="relative mt-10">
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.34, 0.2] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A27C]/35 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2rem] border border-[#C8A27C]/20 bg-[#6F4E37]/36 p-3 backdrop-blur-sm"
            >
              <img src="/images/NofilterCafeLOGO.jpeg" alt="Nofiltr Art Cafe logo" className="h-44 w-44 rounded-[1.6rem] object-cover sm:h-60 sm:w-60" />
            </motion.div>

            <motion.span
              animate={{ y: [0, -20, -40], opacity: [0, 0.28, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[45%] top-0 h-12 w-2 rounded-full bg-[#F5F5DC]/30 blur-sm"
            />
            <motion.span
              animate={{ y: [0, -18, -36], opacity: [0, 0.22, 0] }}
              transition={{ duration: 4.2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[54%] top-1 h-10 w-2 rounded-full bg-[#F5F5DC]/25 blur-sm"
            />
          </div>

          <motion.div {...fadeUp} className="mx-auto mt-10 w-full max-w-4xl">
            <h1 className="text-5xl font-medium leading-[0.95] tracking-[0.02em] text-[#F5F5DC] sm:text-6xl md:text-7xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              <span className="italic text-[#C8A27C]">Bites, Brews and Jazzy Evenings</span>
            </h1>
            <p className="mt-5 text-lg font-light leading-relaxed tracking-[0.01em] text-[#F5F5DC]/90 sm:text-[1.55rem]">
              You deserve the <span className="italic text-[#C8A27C]">best!</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-[#362019] to-[#3b231c]">
        <motion.div {...fadeUp} className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-14">
          <h5 className="mt-2 text-center text-5xl font-medium leading-[1.04] tracking-[0.01em] text-[#F5F5DC] sm:text-6xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            <span className="italic text-[#C8A27C]">We've been busy! You'll see why </span>
          </h5>
          <div className="mx-auto mt-10 flex w-full max-w-4xl justify-center">
            <Countdown />
          </div>
          <p className="mt-12 text-center text-3xl font-medium italic tracking-[0.01em] text-[#C8A27C] sm:text-4xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Cafe Opens on 30th July 2026
          </p>
        </motion.div>
      </section>

      <section className="flex justify-center bg-gradient-to-b from-[#3b231c] to-[#311d17]">
        <motion.div {...fadeUp} className="w-full max-w-5xl px-6 py-28 text-center sm:py-32">
          <p className="text-center text-[0.68rem] font-medium uppercase tracking-[0.6em] text-[#C8A27C] sm:text-xs">The Philosophy</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-center text-5xl font-medium leading-[1.02] tracking-[0.01em] text-[#F5F5DC] sm:text-6xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            A space where <span className="italic text-[#C8A27C]">coffee</span>, <span className="italic text-[#C8A27C]">food</span>, and <span className="italic text-[#C8A27C]">music</span> come together.
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-light leading-relaxed tracking-[0.01em] text-[#F5F5DC]/86 sm:text-[1.7rem]">
            Crafted for people who love good vibes and great taste - a cozy, art-led corner of the city built for slow mornings, late-night conversations, and the kind of music that makes you stay one cup longer.
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-[#311d17] to-[#2b1914]">
        <motion.div {...fadeUp} className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-center text-[0.68rem] font-medium uppercase tracking-[0.6em] text-[#C8A27C] sm:text-xs">The Vibe</p>
          <h3 className="mt-5 text-center text-5xl font-medium tracking-[0.01em] text-[#F5F5DC] sm:text-6xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>Curated for the senses</h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {vibes.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 50px rgba(200,162,124,0.14)", transition: { duration: 0.3 } }}
                className="rounded-[2.1rem] border border-[#C8A27C]/22 bg-[#4A291F]/40 p-7 backdrop-blur-sm sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A27C]/30 text-[10px] font-semibold tracking-[0.2em] text-[#C8A27C]">{item.icon}</div>
                  <span className="text-2xl font-medium italic text-[#C8A27C]/65" style={{ fontFamily: "Cormorant Garamond, serif" }}>{item.id}</span>
                </div>
                <h4 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[0.005em] text-[#F5F5DC]" style={{ fontFamily: "Cormorant Garamond, serif" }}>{item.title}</h4>
                <p className="mt-4 text-2xl font-light leading-snug tracking-[0.01em] text-[#F5F5DC]/84">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="overflow-hidden border-y border-[#C8A27C]/12 bg-[#291711] py-5">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} className="flex w-[200%]">
          {[0, 1].map((i) => (
            <div key={i} className="flex min-w-[100%] items-center justify-around gap-14 whitespace-nowrap px-8 text-4xl italic text-[#C8A27C]/92 sm:text-4xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              <span>Vinyl nights</span><span>•</span><span>Single origin</span><span>•</span><span>Hand-crafted</span><span>•</span><span>Slow mornings</span><span>•</span><span>Latte art</span><span>•</span><span>Soft lights</span><span>•</span><span>Acoustic evenings</span><span>•</span><span>Open mic</span><span>•</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#3a221b] to-[#2a1712] px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,162,124,0.18),transparent_52%)]" />
        <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
          <motion.a
            href="https://instagram.com/nofiltr.artcafe"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#C8A27C]/30 bg-[#4A291F]/28 px-7 py-3 text-xl text-[#F5F5DC] backdrop-blur-sm transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              className="h-6 w-6 text-[#F5F5DC]"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-3.37-3.37 4 4 0 0 1 3.37 3.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
            <span className="text-2xl">@nofiltr.artcafe</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
