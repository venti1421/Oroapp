const KEY = "oroapp_productos";
const FAV_KEY = "oroapp_favoritos";

export const productService = {
  getAll() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  },

  save(producto) {
    const data = this.getAll();
    data.push({ id: Date.now(), ...producto });
    localStorage.setItem(KEY, JSON.stringify(data));
  },

  remove(id) {
    const data = this.getAll().filter(p => p.id !== id);
    localStorage.setItem(KEY, JSON.stringify(data));
  },

  // FAVORITOS
  getFavorites() {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  },

  toggleFavorite(producto) {
    let favs = this.getFavorites();
    const exists = favs.find(p => p.id === producto.id);

    if (exists) {
      favs = favs.filter(p => p.id !== producto.id);
    } else {
      favs.push(producto);
    }

    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  }
};