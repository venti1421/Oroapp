import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      alert("Correo inválido");
      return;
    }

    localStorage.setItem("user", email);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3042B3] via-[#6579F7] to-[#3042B3] relative overflow-hidden">

      {/* 🔵 luces decorativas */}
      <div className="absolute w-96 h-96 bg-[#6579F7] opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* 🧊 card glass */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-xl w-80 text-white z-10">

        <h1 className="text-6xl font-bold text-center mb-5 text-[#D4AF37]">
          OroApp 💰
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-[#D4AF37]"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#D4AF37] text-black py-2 rounded hover:scale-105 transition"
        >
          Ingresar
        </button>

      </div>
    </div>
  );
}