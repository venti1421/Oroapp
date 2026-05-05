import { useEffect, useMemo, useState } from "react";
import { categoriasConfig } from "../data/categorias";
import FormularioDinamico from "../components/FormularioDinamico";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { productService } from "../services/productService";
import { useFilter } from "../hooks/useFilter";

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState(null);
  const [campoFiltro, setCampoFiltro] = useState("");
  const [valorFiltro, setValorFiltro] = useState("");
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);

  const availableFilterFields = useMemo(() => {
    const campos = new Set();
    Object.values(categoriasConfig).forEach((config) => {
      config.campos.forEach((campo) => {
        if (campo !== "descripcion") campos.add(campo);
      });
    });
    return Array.from(campos);
  }, []);

  const filterFieldValues = useMemo(() => {
    if (!campoFiltro) return [];
    const valores = new Set();

    productos.forEach((producto) => {
      if (producto[campoFiltro]) {
        valores.add(producto[campoFiltro]);
      }
    });

    return Array.from(valores);
  }, [productos, campoFiltro]);

  const loadData = () => {
    setLoading(true);

    setTimeout(() => {
      setProductos(productService.getAll());
      setLoading(false);
    }, 400);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filtros = {
    categoria: categoriaFiltro || undefined,
  };

  if (campoFiltro && valorFiltro) {
    filtros[campoFiltro] = valorFiltro;
  }

  const productosFiltrados = useFilter(
    productos,
    busqueda,
    filtros,
    ["descripcion"]
  );

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#3042B3] via-[#6579F7] to-[#3042B3]"></div>

      <div className="absolute w-96 h-96 bg-[#6579F7] opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#D4AF37] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 animate-fade-in">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-[#D4AF37] drop-shadow-lg">
            OroApp
          </h1>
        </div>

        <input
          type="text"
          placeholder="Buscar por descripción..."
          className="w-full mb-6 p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none backdrop-blur-md focus:ring-2 focus:ring-[#D4AF37]"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-white text-sm mb-2">
              Filtrar por categoría:
            </label>
            <select
              value={categoriaFiltro || ""}
              onChange={(e) => setCategoriaFiltro(e.target.value || null)}
              className="w-full p-2 rounded bg-white text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <option value="">Todas las categorías</option>
              {Object.keys(categoriasConfig).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Filtro adicional:
            </label>
            <div className="grid gap-3">
              <select
                value={campoFiltro}
                onChange={(e) => {
                  setCampoFiltro(e.target.value);
                  setValorFiltro("");
                }}
                className="w-full p-2 rounded bg-white text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="">Selecciona atributo</option>
                {availableFilterFields.map((campo) => (
                  <option key={campo} value={campo}>
                    {campo}
                  </option>
                ))}
              </select>

              {campoFiltro && (
                <select
                  value={valorFiltro}
                  onChange={(e) => setValorFiltro(e.target.value)}
                  className="w-full p-2 rounded bg-white text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <option value="">Selecciona valor</option>
                  {filterFieldValues.map((valor) => (
                    <option key={valor} value={valor}>
                      {valor}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        <div className="animate-fade-in mb-8">
          <h2 className="text-xl text-white mb-4">Registrar nuevo producto</h2>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">
              Selecciona la categoría para el producto:
            </label>
            <select
              value={categoriaActiva || ""}
              onChange={(e) => setCategoriaActiva(e.target.value)}
              className="w-full p-2 rounded bg-white text-black outline-none focus:ring-2 focus:ring-[#D4AF37] mb-6"
            >
              <option value="" disabled>Selecciona una categoría</option>
              {Object.keys(categoriasConfig).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.keys(categoriasConfig).map((cat) => (
              <CategoryCard
                key={cat}
                cat={cat}
                active={categoriaActiva === cat}
                onClick={() => setCategoriaActiva(categoriaActiva === cat ? null : cat)}
              />
            ))}
          </div>
          {categoriaActiva ? (
            <FormularioDinamico
              categoria={categoriaActiva}
              onSave={() => {
                loadData();
                setCategoriaActiva(null);
              }}
            />
          ) : (
            <div className="text-white/70">
              Elige una categoría en el desplegable o en las tarjetas para registrar un producto.
            </div>
          )}
        </div>

        <div className="mt-10">
          <h2 className="text-xl text-white mb-4">
            Productos{categoriaFiltro ? ` - ${categoriaFiltro}` : ""} ({productosFiltrados.length})
          </h2>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-xl bg-white/10 animate-pulse"
                ></div>
              ))}
            </div>
          ) : productosFiltrados.length === 0 ? (

            <div className="text-center text-white opacity-70 mt-10">
              <p className="text-4xl mb-3">No hay productos</p>
              <p>No hay productos con esos filtros</p>
              <p className="text-sm">
                Intenta otros filtros o crea uno nuevo
              </p>
            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-4">
              {productosFiltrados.map((p) => (
                <ProductCard
                  key={p.id}
                  producto={p}
                  refresh={loadData}
                />
              ))}
            </div>

          )}
        </div>

      </div>
    </div>
  );
}