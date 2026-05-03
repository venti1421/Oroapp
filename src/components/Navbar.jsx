import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 
    bg-white/10 backdrop-blur-md border-b border-white/20 text-white">
      <h1 className="font-bold text-xl text-[#D4AF37]">
        OroApp 💰
      </h1>

      <div className="flex gap-6 text-sm">
        <Link
          to="/home"
          className="hover:text-[#D4AF37] transition"
        >
          Inicio
        </Link>

        <Link
          to="/favorites"
          className="hover:text-[#D4AF37] transition"
        >
          Favoritos
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="hover:text-red-400 transition"
        >
          Salir
        </button>
      </div>
    </nav>
  );
}