import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export default function Informe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const allProducts = productService.getAll();
    setProductos(allProducts);

    if (id) {
      const prod = allProducts.find((p) => p.id === parseInt(id, 10));
      setProducto(prod || null);
    }

    setLoading(false);
  }, [id]);

  const handleExportCsv = () => {
    const content = [
      ["ID", "Categoría", "Descripción", "Atributos"],
      ...productos.map((item) => [
        item.id,
        item.categoria,
        item.descripcion,
        Object.entries(item)
          .filter(([key]) => !["id", "categoria", "descripcion"].includes(key))
          .map(([key, value]) => `${key}: ${value}`)
          .join(" | "),
      ]),
    ]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "informe-productos.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="relative z-10 max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#D4AF37] mb-6 transition"
          >
            ← Atrás
          </button>

          <div className="card bg-white/10 border border-white/20 p-8 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">
                  📋 Informe de pedidos
                </h1>
                <p className="text-white/70">
                  Listado de productos cargados y exportable a CSV.
                </p>
              </div>
              <button
                onClick={handleExportCsv}
                className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#c9b44a] transition"
              >
                Descargar CSV
              </button>
            </div>

            {productos.length === 0 ? (
              <div className="text-white/70">
                No hay productos disponibles para generar el informe.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-white/10 bg-white/5">
                <table className="min-w-full text-left text-sm text-white">
                  <thead>
                    <tr className="border-b border-white/10 text-white/80">
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Categoría</th>
                      <th className="px-4 py-3">Descripción</th>
                      <th className="px-4 py-3">Atributos</th>
                      <th className="px-4 py-3">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((item) => (
                      <tr key={item.id} className="border-b border-white/10 hover:bg-white/5">
                        <td className="px-4 py-4">{item.id}</td>
                        <td className="px-4 py-4">{item.categoria}</td>
                        <td className="px-4 py-4">{item.descripcion}</td>
                        <td className="px-4 py-4 text-white/80">
                          {Object.entries(item)
                            .filter(([key]) => !["id", "categoria", "descripcion"].includes(key))
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(" • ")}
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            to={`/informe/${item.id}`}
                            className="text-[#D4AF37] hover:text-white transition"
                          >
                            Ver detalle
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
