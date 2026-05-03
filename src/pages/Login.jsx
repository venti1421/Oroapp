import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [modoRegistro, setModoRegistro] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (campo, valor) => {
    setForm({
      ...form,
      [campo]: valor,
    });
  };

  // VALIDAR EMAIL
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // REGISTRO
  const handleRegister = () => {
    if (!validarEmail(form.email)) {
      alert("Correo inválido");
      return;
    }

    if (form.password.length < 4) {
      alert("La contraseña debe tener mínimo 4 caracteres");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("users")) || [];

    const existe = usuarios.find((u) => u.email === form.email);

    if (existe) {
      alert("Este usuario ya existe");
      return;
    }

    usuarios.push(form);
    localStorage.setItem("users", JSON.stringify(usuarios));

    alert("Registro exitoso 🎉");

    setModoRegistro(false);
  };

  // LOGIN
  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("users")) || [];

    const user = usuarios.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (!user) {
      alert("Credenciales incorrectas");
      return;
    }

    // 🔥 AQUÍ USAMOS CONTEXT
    login(user);

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3042B3] via-[#6579F7] to-[#3042B3]"></div>

      {/* EFECTOS */}
      <div className="absolute w-96 h-96 bg-[#6579F7] opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* CARD */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-xl w-80 text-white">

        <h1 className="text-2xl font-bold text-center mb-5 text-[#D4AF37]">
          {modoRegistro ? "Registro" : "Login"} 💰
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Correo"
          className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white/70 text-white outline-none"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white/70 text-white outline-none"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        {/* BOTÓN */}
        <button
          onClick={modoRegistro ? handleRegister : handleLogin}
          className="w-full bg-[#D4AF37] text-black py-2 rounded hover:scale-105 transition"
        >
          {modoRegistro ? "Registrarse" : "Ingresar"}
        </button>

        {/* CAMBIO DE MODO */}
        <p
          className="text-center mt-4 text-sm cursor-pointer hover:underline"
          onClick={() => setModoRegistro(!modoRegistro)}
        >
          {modoRegistro
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </p>

      </div>
    </div>
  );
}