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
            ? "bg-[#D4AF37] text-black scale-105 shadow-lg"
            : "bg-white/10 text-white border-white/20 hover:scale-105 hover:bg-white/20"
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