import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export default function Informe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const productos = productService.getAll();
    const prod = productos.find((p) => p.id === parseInt(id));

    if (prod) {
      setProducto(prod);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <p>Generando informe...</p>
      </div>
    );
  }

  if (!id) {
    return (
      <div className="min-h-screen p-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#D4AF37] mb-6 transition"
          >
            ← Atrás
          </button>

          <div className="card bg-white/10 border border-white/20 p-8 rounded-xl">
            <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">
              📋 Informe
            </h1>
            <p className="text-white/70">
              Funcionalidad futura
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="p-6 text-center text-white">
        <p className="text-3xl mb-4">📭</p>
        <p>Producto no encontrado</p>
        <button
          onClick={() => navigate("/home")}
          className="mt-4 bg-[#D4AF37] text-black px-4 py-2 rounded"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-[#D4AF37] mb-6 transition"
        >
          ← Atrás
        </button>

        <div className="card bg-white/10 border border-white/20 p-8 rounded-xl">
          <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">
            📋 Informe del Producto
          </h1>
          <p className="text-white/70 mb-8">
            Generado el {new Date().toLocaleDateString("es-ES")}
          </p>

          <div className="bg-white/5 p-6 rounded-lg mb-8 border border-white/10">
            <div className="mb-6">
              <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold">
                {producto.categoria}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {producto.descripcion}
            </h2>

            <div className="space-y-4">
              {Object.entries(producto).map(([key, value]) => {
                if (
                  key === "id" ||
                  key === "categoria" ||
                  key === "descripcion"
                )
                  return null;

                return (
                  <div
                    key={key}
                    className="flex justify-between border-b border-white/10 pb-3"
                  >
                    <p className="text-white/70 uppercase font-semibold">
                      {key}:
                    </p>
                    <p className="text-white font-bold">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
