export const categoriasConfig = {
  ANILLOS: {
    campos: ["genero", "talla", "estado", "descripcion"],
    opciones: {
      genero: ["Hombre", "Mujer"],
      talla: ["5", "6", "7", "8", "9", "10", "11", "12"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  },

  ARETES: {
    campos: ["tipoArete", "tamaño", "estado", "descripcion"],
    opciones: {
      tipoArete: ["Topos", "Largos", "Candongas"],
      tamaño: ["Pequeño", "Mediano", "Grande"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  },

  DIJES: {
    campos: ["tamaño", "estado", "descripcion"],
    opciones: {
      tamaño: ["Pequeño", "Mediano", "Grande"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  },

  CADENAS: {
    campos: ["tejido", "largoCm", "estado", "descripcion"],
    opciones: {
      largoCm: ["40", "45", "50", "55", "60"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  },

  PULSERA: {
    campos: ["tejido", "largoCm", "estado", "descripcion"],
    opciones: {
      largoCm: ["18", "19", "20", "22"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  },

  ESPECIAL: {
    campos: ["tipoEspecial", "estado", "descripcion"],
    opciones: {
      tipoEspecial: ["Relojes", "Tobilleras", "Piercing", "Herrajes"],
      estado: ["Nuevo", "Usado", "Vintage"]
    }
  }
};