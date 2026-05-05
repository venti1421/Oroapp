import { useState } from "react";
import { categoriasConfig } from "../data/categorias";
import { productService } from "../services/productService";
import InlineAlert from "../components/InlineAlert";

export default function FormularioDinamico({ categoria, onSave }) {
  const config = categoriasConfig[categoria];

  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("error");

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
    setMessage(null);

    if (!categoria || !config) {
      setMessage("Error: categoría inválida");
      setMessageType("error");
      return;
    }

    if (!formData.descripcion) {
      setMessage("Agrega una descripción");
      setMessageType("error");
      return;
    }

    const producto = {
      categoria,
      ...formData,
    };

    productService.save(producto);

    if (onSave) onSave();

    setFormData({});
    setMessage("Producto guardado correctamente");
    setMessageType("success");
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

      {message && (
        <div className="mb-4">
          <InlineAlert type={messageType}>{message}</InlineAlert>
        </div>
      )}

      {config.campos.map((campo) => (
        <div key={campo} className="mb-3">
          {campo === "descripcion" ? (
            <textarea
              placeholder="Descripción"
              className={`w-full p-2 rounded bg-white text-black outline-none ${
                messageType === "error" && campo === "descripcion"
                  ? "ring-1 ring-red-400"
                  : ""
              }`}
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