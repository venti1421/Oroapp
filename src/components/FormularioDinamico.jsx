import { useState } from "react";
import { categoriasConfig } from "../data/categorias";
import { productService } from "../services/productService";

export default function FormularioDinamico({ categoria, onSave }) {
  const config = categoriasConfig[categoria];

  const [formData, setFormData] = useState({});

  const formatFieldName = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase());
  };

  const handleChange = (campo, valor) => {
    setFormData((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const handleSubmit = () => {
    if (!categoria || !config) {
      alert("Error: categoría inválida");
      return;
    }

    if (!formData.descripcion) {
      alert("Agrega una descripción");
      return;
    }

    const producto = {
      categoria,
      ...formData,
    };

    productService.save(producto);

    if (onSave) onSave();

    setFormData({});
  };

  if (!config) {
    return (
      <div className="text-white">
        Error: configuración no encontrada para {categoria}
      </div>
    );
  }

  return (
    <div className="card max-w-md mx-auto mt-4">
      <h2 className="text-[#D4AF37] font-bold mb-4">
        {categoria}
      </h2>

      {config.campos.map((campo) => (
        <div key={campo} className="mb-3">
          {campo === "descripcion" ? (
            <textarea
              placeholder="Descripción"
              className="w-full p-2 rounded bg-white text-black"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          ) : config.opciones && config.opciones[campo] ? (
            <select
              className="w-full p-2 rounded bg-white text-black"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            >
              <option value="">Selecciona {formatFieldName(campo)}</option>

              {config.opciones[campo].map((op, i) => (
                <option key={i} value={op}>
                  {op}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder={formatFieldName(campo)}
              className="w-full p-2 rounded bg-white text-black"
              value={formData[campo] || ""}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="btn-primary w-full mt-3"
      >
        Guardar
      </button>

    </div>
  );
}