export const categoriasConfig = {
  ANILLOS: {
    campos: ["genero", "talla", "descripcion"],
    opciones: {
      genero: ["Hombre", "Mujer"],
      talla: ["5", "6", "7", "8", "9", "10", "11", "12"]
    }
  },

  ARETES: {
    campos: ["tipoArete", "tamaño", "descripcion"],
    opciones: {
      tipoArete: ["Topos", "Largos", "Candongas"],
      tamaño: ["Pequeño", "Mediano", "Grande"]
    }
  },

  DIJES: {
    campos: ["tamaño", "descripcion"],
    opciones: {
      tamaño: ["Pequeño", "Mediano", "Grande"]
    }
  },

  CADENAS: {
    campos: ["largoCm", "descripcion"],
    opciones: {
      largoCm: ["40", "45", "50", "55", "60"]
    }
  },

  PULSERA: {
    campos: ["largoCm", "descripcion"],
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