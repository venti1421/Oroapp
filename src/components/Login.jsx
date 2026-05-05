import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import InlineAlert from "../components/InlineAlert";

export default function Login() {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [modoRegistro, setModoRegistro] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("error");

  const handleChange = (campo, valor) => {
    setForm({
      ...form,
      [campo]: valor,
    });
  };

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = () => {
    setMessage(null);

    if (!validarEmail(form.email)) {
      setMessage("Correo inválido");
      setMessageType("error");
      return;
    }

    if (form.password.length < 4) {
      setMessage("La contraseña debe tener mínimo 4 caracteres");
      setMessageType("error");
      return;
    }

    const result = register(form);

    if (!result.ok) {
      setMessage(result.error);
      setMessageType("error");
      return;
    }

    setMessage("Registro exitoso 🎉 Puedes iniciar sesión.");
    setMessageType("success");
    setModoRegistro(false);
  };

  const handleLogin = () => {
    setMessage(null);

    if (!validarEmail(form.email)) {
      setMessage("Correo inválido");
      setMessageType("error");
      return;
    }

    if (form.password.length < 4) {
      setMessage("La contraseña debe tener mínimo 4 caracteres");
      setMessageType("error");
      return;
    }

    const result = login(form);

    if (!result.ok) {
      setMessage(result.error);
      setMessageType("error");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3042B3] via-[#6579F7] to-[#3042B3]"></div>

      <div className="absolute w-96 h-96 bg-[#6579F7] opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl shadow-xl w-80 text-white">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#D4AF37]">
          OroApp 💰
        </h1>
        <h2 className="text-xl font-semibold text-center mb-5 text-white">
          {modoRegistro ? "Registro" : "Login"}
        </h2>

        {message && (
          <div className="mb-4">
            <InlineAlert type={messageType}>{message}</InlineAlert>
          </div>
        )}

        <input
          type="email"
          placeholder="Correo"
          className={`w-full mb-3 p-2 rounded bg-white/20 placeholder-white/70 text-white outline-none transition ${
            messageType === "error" ? "ring-1 ring-red-400" : ""
          }`}
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className={`w-full mb-3 p-2 rounded bg-white/20 placeholder-white/70 text-white outline-none transition ${
            messageType === "error" ? "ring-1 ring-red-400" : ""
          }`}
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <button
          onClick={modoRegistro ? handleRegister : handleLogin}
          className="w-full bg-[#D4AF37] text-black py-2 rounded hover:scale-105 transition"
        >
          {modoRegistro ? "Registrarse" : "Ingresar"}
        </button>

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