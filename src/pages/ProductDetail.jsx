import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productos = productService.getAll();
    const prod = productos.find((p) => p.id === parseInt(id));

    if (prod) {
      setProducto(prod);
      setIsFavorite(
        productService.getFavorites().some((f) => f.id === prod.id)
      );
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <p>Cargando...</p>
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

  const handleToggleFav = () => {
    productService.toggleFavorite(producto);
    setIsFavorite(!isFavorite);
  };

  const handleDelete = () => {
    if (window.confirm("¿Eliminar este producto?")) {
      productService.remove(producto.id);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="relative z-10 max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-[#D4AF37] mb-6 transition"
        >
          ← Atrás
        </button>

        <div className="card bg-white/10 border border-white/20 p-8 rounded-xl">
          <div className="mb-6">
            <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold">
              {producto.categoria}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
            {producto.descripcion}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(producto).map(([key, value]) => {
              if (
                key === "id" ||
                key === "categoria" ||
                key === "descripcion"
              )
                return null;

              return (
                <div key={key} className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/70 text-sm uppercase mb-1">
                    {key}
                  </p>
                  <p className="text-white font-semibold text-lg">{value}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8 border-t border-white/20 pt-6">
            <button
              onClick={handleToggleFav}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition ${
                isFavorite
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isFavorite ? "⭐ En favoritos" : "☆ Agregar a favoritos"}
            </button>

            <button
              onClick={() => navigate(`/informe/${producto.id}`)}
              className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              📋 Generar informe
            </button>

            <button
              onClick={handleDelete}
              className="flex-1 px-4 py-3 bg-red-600/80 hover:bg-red-700 text-white rounded-lg font-semibold transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
