export const categoriasConfig = {
  ANILLOS: {
    campos: ["genero", "talla", "descripcion"],
    opciones: {
      genero: ["Hombre", "Mujer"],
      talla: ["5", "6", "7", "8", "9", "10", "11", "12"]
    }
  },

  ARETES: {
    campos: ["tipoArete", "tamanio", "descripcion"],
    opciones: {
      tipoArete: ["Topos", "Largos", "Candongas"],
      tamanio: ["Pequeño", "Mediano", "Grande"]
    }
  },

  DIJES: {
    campos: ["tamanio", "descripcion"],
    opciones: {
      tamanio: ["Pequeño", "Mediano", "Grande"]
    }
  },

  CADENAS: {
    campos: ["tejido", "largoCm", "descripcion"],
    opciones: {
      largoCm: ["40", "45", "50", "55", "60"]
    }
  },

  PULSERA: {
    campos: ["tejido", "largoCm", "descripcion"],
    opciones: {
      largoCm: ["18", "19", "20", "22"]
    }
  },

  ESPECIAL: {
    campos: ["tipoEspecial", "descripcion"],
    opciones: {
      tipoEspecial: ["Relojes", "Tobilleras", "Piercing", "Herrajes"]
    }
  }
};