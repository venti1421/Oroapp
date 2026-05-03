import { useState } from "react";
import FormularioDinamico from "../components/FormularioDinamico";
import { categoriasConfig } from "../data/categorias";

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("");

  return (
    <div className="p-5">

      {/* TÍTULO */}
      <h1 className="text-3xl font-bold mb-6 text-white">
        Selecciona una categoría 💰
      </h1>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">

        {Object.keys(categoriasConfig).map((cat) => (
          <div
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`p-5 rounded-xl cursor-pointer shadow-md transition transform hover:scale-105 border backdrop-blur-md
              ${
                categoriaActiva === cat
                  ? "bg-[#D4AF37] text-black border-transparent"
                  : "bg-white/90 text-black hover:border-[#6579F7]"
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

      {/* FORMULARIO DINÁMICO */}
      {categoriaActiva && (
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md">
          <FormularioDinamico categoria={categoriaActiva} />
        </div>
      )}

    </div>
  );
}