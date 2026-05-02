import { useState } from "react";
import FormularioDinamico from "../components/FormularioDinamico";
import { categoriasConfig } from "../data/categorias";

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("");

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-6 text-[color:var(--secondary)]">
        Selecciona una categoría 💰
      </h1>

      {/* 🧱 GRID DE TARJETAS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">

        {Object.keys(categoriasConfig).map((cat) => (
          <div
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`p-5 rounded-xl cursor-pointer shadow-md transition transform hover:scale-105
              ${
                categoriaActiva === cat
                  ? "bg-[color:var(--primary)] text-black"
                  : "bg-white"
              }
            `}
          >
            <h2 className="text-lg font-bold">{cat}</h2>
            <p className="text-sm opacity-70 mt-1">
              Crear {cat.toLowerCase()}
            </p>
          </div>
        ))}

      </div>

      {/* 🧾 FORMULARIO DINÁMICO */}
      {categoriaActiva && (
        <FormularioDinamico categoria={categoriaActiva} />
      )}

    </div>
  );
}