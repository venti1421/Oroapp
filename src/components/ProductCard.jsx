import { productService } from "../services/productService";

export default function ProductCard({ producto, refresh }) {
  const handleDelete = () => {
    productService.remove(producto.id);
    refresh();
  };

  const handleFav = () => {
    productService.toggleFavorite(producto);
    refresh();
  };

  return (
    <div className="card">

      <h3 className="text-[#D4AF37] font-bold">
        {producto.categoria}
      </h3>

      <p className="text-sm opacity-80">
        {producto.descripcion}
      </p>

      {/* atributos dinámicos */}
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
          className="btn-secondary"
        >
          ⭐
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Eliminar
        </button>
      </div>

    </div>
  );
}