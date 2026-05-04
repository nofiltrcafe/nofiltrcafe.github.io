import Hero from "./Hero";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1A1A1A] text-[#F5F5DC]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(200,162,124,0.14),transparent_48%),linear-gradient(180deg,#21110d_0%,#1a100d_40%,#160f0d_100%)]" />
      <Hero />
    </div>
  );
}

export default App;
