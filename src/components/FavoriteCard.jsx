import { Link } from "react-router-dom";
import { productService } from "../services/productService";

export default function FavoriteCard({ producto, refresh }) {
  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    productService.toggleFavorite(producto);
    refresh();
  };

  return (
    <Link
      to={`/product/${producto.id}`}
      className="card border border-[#D4AF37]/30 bg-[#D4AF37]/10 hover:shadow-lg hover:scale-105 transition-all cursor-pointer block"
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
          onClick={handleRemoveFromFavorites}
          className="bg-[#D4AF37] text-black flex-1 px-3 py-1 rounded hover:bg-[#c6a84a]"
        >
          Quitar de favoritos
        </button>
      </div>

    </Link>
  );
}