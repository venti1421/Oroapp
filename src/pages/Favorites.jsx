import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites() {
  const [favoritos, setFavoritos] = useState([]);

  const loadData = () => {
    setFavoritos(productService.getFavorites());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4 text-[#D4AF37]">
        ⭐ Favoritos
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {favoritos.length === 0 ? (
          <p>No hay favoritos</p>
        ) : (
          favoritos.map((p) => (
            <FavoriteCard
              key={p.id}
              producto={p}
              refresh={loadData}
            />
          ))
        )}
      </div>
    </div>
  );
}