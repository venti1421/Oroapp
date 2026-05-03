import { useState } from "react";
import { categoriasConfig } from "../data/categorias";

export default function FormularioDinamico({ categoria }) {
  const config = categoriasConfig[categoria];

  const [formData, setFormData] = useState({});

  const handleChange = (campo, valor) => {
    setFormData({
      ...formData,
      [campo]: valor,
    });
  };

  const handleSubmit = () => {
    console.log("Producto:", { categoria, ...formData });

    alert("Producto guardado 🚀");

    setFormData({});
  };

  if (!config) return null;

  return (
    <div className="card max-w-md mx-auto mt-4">

      <h2 className="text-xl font-bold mb-4 text-[#D4AF37]">
        {categoria}
      </h2>

      {/* CAMPOS DINÁMICOS */}
      {config.campos.map((campo) => (
        <div key={campo} className="mb-3">

          {/* DESCRIPCIÓN */}
          {campo === "descripcion" ? (
            <textarea
              placeholder="Descripción"
              className="w-full p-2 rounded bg-white/90 text-black border"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          ) : config.opciones[campo] ? (
            /* SELECT */
            <select
              className="w-full p-2 rounded bg-white/90 text-black border"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            >
              <option value="">Selecciona {campo}</option>

              {config.opciones[campo].map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          ) : (
            /* INPUT */
            <input
              type="text"
              placeholder={campo}
              className="w-full p-2 rounded bg-white/90 text-black border"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          )}

        </div>
      ))}

      {/* BOTÓN */}
      <button
        onClick={handleSubmit}
        className="btn-primary w-full mt-3"
      >
        Guardar Producto
      </button>

    </div>
  );
}