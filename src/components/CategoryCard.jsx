export default function CategoryCard({ cat, active, onClick }) {
  const icons = {
    ANILLOS: "💍",
    ARETES: "✨",
    DIJES: "🔗",
    CADENAS: "⛓️",
    PULSERA: "📿",
    ESPECIAL: "⭐",
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer p-5 rounded-xl text-center
        transition-all duration-300
        backdrop-blur-md border

        ${
          active
            ? "bg-[#F8E9A1] text-black scale-105 shadow-lg border-[#D4AF37]/60"
            : "bg-white/10 text-white border-[#D4AF37]/30 hover:scale-105 hover:bg-[#D4AF37]/10"
        }
      `}
    >
      <div className="text-3xl mb-2">
        {icons[cat]}
      </div>

      <h2 className="font-bold tracking-wide">
        {cat}
      </h2>

      {active && (
        <div className="absolute inset-0 rounded-xl border-2 border-[#D4AF37] animate-pulse"></div>
      )}
    </div>
  );
}