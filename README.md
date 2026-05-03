# OroApp 💰

## Descripción del Proyecto

**OroApp** es una aplicación SPA (Single Page Application) para gestión y exploración de productos de joyería. Permite a usuarios registrarse, crear una colección de productos categorizados, buscar, filtrar, marcados como favoritos y visualizar detalles individuales. 

**Tema elegido:** Tienda de joyería en línea (oro, plata, gemas)  
**Dominio:** E-commerce / Gestión de inventario

---

## Stack Técnico Obligatorio ✅

- **React** 19.2.5
- **Vite** 8.0.10 (herramienta de build)
- **Tailwind CSS** 4.2.4 (estilos)
- **React Router** 7.14.2 (navegación)
- **Context API** (estado global)
- **localStorage** (persistencia)

---

## Requerimientos Funcionales Implementados

### ✅ 5.1 - Layout Principal Persistente
- Navbar con navegación entre vistas (Home, Favoritos, Logout)
- Layout general coherente con colores y efectos visuales
- Persiste entre rutas

### ✅ 5.2 - Vista Principal de Exploración
- Página Home que muestra colección de productos
- Cada producto contiene: id, descripción, categoría, estado y otros atributos

### ✅ 5.3 - Búsqueda
- Campo de búsqueda funcional por descripción
- Filtrado en tiempo real (useMemo optimizado)

### ✅ 5.4 - Filtros Combinables (Dos filtros)
1. **Filtro por categoría:** ANILLOS, ARETES, DIJES, CADENAS, PULSERA, ESPECIAL
2. **Filtro por estado:** Nuevo, Usado, Vintage

Los filtros son combinables entre sí y con la búsqueda.

### ✅ 5.5 - Shortlist / Favoritos
- Página Favoritos independiente
- Botón para agregar/quitar de favoritos
- Persiste en localStorage

### ✅ 5.6 - Detalle o Comparación
- Ruta `/product/:id` con vista detallada
- Muestra todos los atributos del producto
- Opción para agregar a favoritos o eliminar

### ✅ 5.7 - Formulario de Configuración
- Formulario dinámico por categoría
- Campos controlados: descripción, estado, atributos específicos (talla, tejido, tipo, etc.)
- Validación básica
- Persiste en localStorage

### ✅ 5.8 - Ruta Protegida
- `/home` y `/favorites` protegidas
- Redirección automática a login si no hay sesión
- ProtectedRoute wrapper

### ✅ 5.9 - Estados de Experiencia
- **Loading state:** Skeleton loading en listado
- **Empty state:** Mensajes cuando no hay productos
- **Error handling:** Validaciones en formulario

---

## Requerimientos de Arquitectura ✅

### Capa de Datos Desacoplada
```javascript
// src/services/productService.js
// Centraliza acceso a localStorage
// No hay queries de datos directas en componentes
```

### Normalización
```javascript
// src/data/categorias.js
// Define estructura esperada de cada categoría
// Metadatos de campos y opciones centralizados
```

### Estado Global
```javascript
// src/context/AuthContext.jsx
// Sesión de usuario (login, logout, persistencia)
// Globalizamos solo info transversal
```

### Persistencia Local
1. **localStorage.users** - Datos de usuario (email, password)
2. **localStorage.user** - Sesión actual (usuario logged in)
3. **localStorage.oroapp_productos** - Colección de productos
4. **localStorage.oroapp_favoritos** - Lista de favoritos

### Separación de Responsabilidades
```
src/
  ├── app/              # Rutas, wrappers, shell
  ├── components/       # Componentes reutilizables (Card, Navbar, Form)
  ├── context/          # Estado global (Auth)
  ├── data/             # Configuración local (categorías)
  ├── hooks/            # Hooks personalizados (useFilter)
  ├── pages/            # Vistas/pantallas (Home, Login, Favorites, Detail)
  ├── services/         # Acceso a datos (productService)
  └── index.css         # Estilos globales + Tailwind
```

---

## Hook Personalizado Implementado

### `useFilter(items, searchTerm, filters, searchKeys)`
Encapsula la lógica de búsqueda y filtrado combinable.

```javascript
// Uso en Home.jsx
const productosFiltrados = useFilter(
  productos,
  busqueda,
  {
    categoria: categoriaActiva || undefined,
    estado: estadoFiltro || undefined,
  },
  ["descripcion"]
);
```

**Beneficios:**
- Lógica reutilizable
- Optimizado con useMemo
- Reducción de código boilerplate

---

## Decisiones Técnicas Clave

### 1. Context + localStorage para Sesión
Aunque es simple, es suficiente para un taller. Permite aprender conceptos sin complejidad.

### 2. Formulario Dinámico
Los campos se generan desde `categoriasConfig`, permitiendo agregar nuevas categorías sin tocar componentes.

### 3. ProductCard como Link
La tarjeta completa es un enlace a detalle, excepto los botones (event.preventDefault).

### 4. useMemo en useFilter
Evita recálculos innecesarios en cada render, optimizando performance.

### 5. Tailwind CSS para Todos los Estilos
Coherencia visual, reactividad y facilidad de cambios. Paleta de colores centralizada en variables CSS.

---

## Instalación

```bash
# Clonar/extraer el proyecto
cd oroapp

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm build

# Linting
npm run lint
```

---

## Ejecución

```bash
npm run dev
# Se abre en http://localhost:5173

# Usuario demo (registrarse con cualquier email/contraseña)
```

---

## Estructura de Archivos

```
src/
├── app/
│   ├── App.jsx                 # Rutas principales
│   ├── Layout.jsx              # Shell con navbar
│   └── ProtectedRoute.jsx       # Wrapper para rutas privadas
├── components/
│   ├── CategoryCard.jsx         # Card de categoría (selector)
│   ├── FormularioDinamico.jsx   # Form con campos dinámicos
│   ├── Navbar.jsx               # Navegación superior
│   └── ProductCard.jsx          # Card de producto (enlace a detalle)
├── context/
│   └── AuthContext.jsx          # Estado global de sesión
├── data/
│   └── categorias.js            # Metadata y estructura de categorías
├── hooks/
│   └── useFilter.js             # Hook personalizado de filtrado
├── pages/
│   ├── Home.jsx                 # Exploración + crear productos
│   ├── Login.jsx                # Registro/login
│   ├── Favorites.jsx            # Listado de favoritos
│   └── ProductDetail.jsx        # Vista detallada de producto
├── services/
│   └── productService.js        # Acceso a datos (CRUD + favoritos)
├── App.css                      # Estilos específicos (vacío)
├── index.css                    # Estilos globales + Tailwind
└── main.jsx                     # Punto de entrada
```

---

## Flujo de Datos

```
User Registration/Login
  ↓
AuthContext (login state + persistencia)
  ↓
Protected Routes (/home, /favorites)
  ↓
Home: 
  ├─ Búsqueda + Filtros (useFilter hook)
  ├─ Crear producto (FormularioDinamico)
  └─ Ver productos (ProductCard)
  
Favoritos:
  └─ Listar productos favoritos
  
Product Detail (/product/:id):
  ├─ Ver detalles completos
  ├─ Agregar/quitar favorito
  └─ Eliminar producto
```

---

## Proyección Futura

### Sesión 2: Backend & API
- Conectar a API REST (Express.js / Fastify)
- Migrar localStorage a base de datos (MongoDB/PostgreSQL)
- Autenticación con JWT

### Sesión 3: Validación & Testing
- Implementar validaciones robustas (Zod/Yup)
- Tests unitarios (Vitest/Jest)
- Tests de componentes (Testing Library)

### Sesión 4: UX Avanzada
- Paginación / Virtualization en listados
- Imagenes y galería
- Filtros avanzados (rango de precio, etc.)

### Sesión 5: Optimización & Deploy
- Code splitting y lazy loading
- PWA capabilities
- Deploy en Vercel / Netlify
- Monitoring y analytics

### Futuro: E-commerce Completo
- Carrito de compras
- Checkout
- Notificaciones
- Sistema de reseñas
- Admin panel

---

## Cumplimiento de Requisitos

| Requisito | Estado | Notas |
|-----------|--------|-------|
| Stack obligatorio | ✅ | React, Vite, Tailwind, Router |
| Capa de servicios | ✅ | productService.js centralizado |
| Normalización | ✅ | categoriasConfig.js estructura datos |
| Estado global | ✅ | AuthContext + useFilter hook |
| Persistencia (2+) | ✅ | users, user, productos, favoritos |
| Búsqueda | ✅ | Por descripción, tiempo real |
| Filtros (2+) | ✅ | Categoría + Estado (combinables) |
| Favoritos | ✅ | Shortlist funcional |
| Detalle | ✅ | /product/:id |
| Formulario | ✅ | Dinámico por categoría |
| Ruta protegida | ✅ | /home, /favorites, ProtectedRoute |
| Estados UX | ✅ | Loading, empty, error |
| Estructura modular | ✅ | Carpetas organizadas por responsabilidad |
| Hook personalizado | ✅ | useFilter |
| README técnico | ✅ | Este documento |

---

## Notas de Calidad

- **Accesibilidad:** Inputs con labels, focus states, aria-* cuando sea necesario
- **Responsive:** Mobile-first con Tailwind (md:, lg: breakpoints)
- **Coherencia visual:** Paleta de colores consistente (#D4AF37 oro, #3042B3 azul)
- **Performance:** useMemo, lazy loading, CSS optimizado
- **Mantenibilidad:** Nombres claros, componentes pequeños, lógica desacoplada

---

## Licencia

Proyecto educativo - Taller Integrador Técnico

