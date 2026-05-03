import { Link } from "react-router-dom";
import { productService } from "../services/productService";

export default function ProductCard({ producto, refresh }) {
  const handleDelete = (e) => {
    e.preventDefault();
    productService.remove(producto.id);
    refresh();
  };

  const handleFav = (e) => {
    e.preventDefault();
    productService.toggleFavorite(producto);
    refresh();
  };

  return (
    <Link
      to={`/product/${producto.id}`}
      className="card hover:shadow-lg hover:scale-105 transition-all cursor-pointer block"
    >

      <h3 className="text-[#D4AF37] font-bold">
        {producto.categoria}
      </h3>

      <p className="text-sm opacity-80 font-semibold">
        {producto.descripcion}
      </p>

      <div className="text-xs mt-2 opacity-70">
        {Object.entries(producto).map(([key, value]) => {
          if (key === "id" || key === "categoria" || key === "descripcion") return null;
          return (
            <p key={key}>
              {key}: {value}
            </p>
          );
        })}
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={handleFav}
          className="btn-secondary flex-1"
        >
          ⭐
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 flex-1 px-3 py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>

    </div>
  );
}