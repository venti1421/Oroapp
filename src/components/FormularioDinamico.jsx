import { categoriasConfig } from "../data/categorias";
import { useState } from "react";

export default function FormularioDinamico({ categoria }) {
  const config = categoriasConfig[categoria];

  const [formData, setFormData] = useState({});

  const handleChange = (campo, valor) => {
    setFormData({
      ...formData,
      [campo]: valor
    });
  };

  if (!config) return <p>Selecciona una categoría</p>;

  return (
    <div className="p-5 bg-white rounded-xl shadow-md max-w-md mx-auto">

      <h2 className="text-xl font-bold mb-4">{categoria}</h2>

      {config.campos.map((campo) => (
        <div key={campo} className="mb-3">

          {campo === "descripcion" ? (
            <textarea
              placeholder="Descripción"
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          ) : config.opciones[campo] ? (
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(campo, e.target.value)}
            >
              <option>Selecciona {campo}</option>
              {config.opciones[campo].map((op) => (
                <option key={op}>{op}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder={campo}
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          )}

        </div>
      ))}

      <button className="btn-primary mt-3">
        Guardar
      </button>
    </div>
  );
}