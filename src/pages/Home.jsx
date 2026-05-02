import { useState } from "react";
import FormularioDinamico from "../components/FormularioDinamico";
import { categoriasConfig } from "../data/categorias";

export default function Home() {
  const [categoria, setCategoria] = useState("");

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5 text-[color:var(--secondary)]">
        Crear Producto 💰
      </h1>

      {/* SELECT DE CATEGORÍAS */}
      <div className="mb-5">
        <label className="block mb-2 font-semibold">
          Selecciona una categoría
        </label>

        <select
          className="w-full p-2 border rounded"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecciona categoría</option>

          {Object.keys(categoriasConfig).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* FORMULARIO DINÁMICO */}
      {categoria && (
        <FormularioDinamico categoria={categoria} />
      )}

    </div>
  );
}