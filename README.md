# OroApp

Una aplicación web moderna para la gestión y exploración de productos de joyería. Permite a los usuarios crear, organizar y gestionar su colección de joyas con una interfaz intuitiva y elegante.

## Características Principales

### Gestión de Productos
- **Creación dinámica** de productos por categoría (Anillos, Aretes, Dijes, Cadenas, Pulseras, Especial)
- **Atributos específicos** por tipo de joya (talla, material, tipo, estado, etc.)
- **Edición y eliminación** de productos existentes

### Exploración y Búsqueda
- **Búsqueda en tiempo real** por descripción del producto
- **Filtros combinables** por categoría y estado del producto
- **Vista de cuadrícula** con información resumida de cada producto

### Sistema de Favoritos
- **Marcado de favoritos** desde cualquier vista
- **Página dedicada** para visualizar productos favoritos
- **Gestión sencilla** para agregar o quitar de favoritos

### Detalles y Reportes
- **Vista detallada** de cada producto con todos sus atributos
- **Página de informes** para funcionalidad futura
- **Navegación intuitiva** entre vistas

### Sistema de Autenticación
- **Registro y login** de usuarios
- **Protección de rutas** con redirección automática
- **Persistencia de sesión** en el navegador

## Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite** - Herramienta de desarrollo y build
- **React Router** - Navegación SPA
- **Tailwind CSS** - Estilos y diseño
- **Context API** - Gestión de estado global
- **LocalStorage** - Persistencia de datos

## Estructura del Proyecto

```
src/
├── app/
│   ├── App.jsx              # Configuración de rutas principales
│   ├── Layout.jsx           # Layout general con navbar
│   └── ProtectedRoute.jsx   # Protección de rutas autenticadas
├── components/
│   ├── Navbar.jsx           # Barra de navegación
│   ├── ProductCard.jsx      # Tarjeta de producto (Home/Favoritos)
│   ├── FavoriteCard.jsx     # Tarjeta específica para favoritos
│   ├── CategoryCard.jsx     # Selector de categorías
│   └── FormularioDinamico.jsx # Formulario de creación de productos
├── context/
│   └── AuthContext.jsx      # Gestión de autenticación
├── data/
│   └── categorias.js        # Configuración de categorías y atributos
├── hooks/
│   └── useFilter.js         # Hook personalizado para filtrado
├── pages/
│   ├── Login.jsx            # Página de autenticación
│   ├── Home.jsx             # Página principal con productos
│   ├── Favorites.jsx        # Página de productos favoritos
│   ├── ProductDetail.jsx    # Vista detallada de producto
│   └── Informe.jsx          # Página de informes (funcionalidad futura)
└── services/
    └── productService.js    # Servicio de gestión de productos
```

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd oroapp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Uso
1. **Registro/Login**: Crea una cuenta o inicia sesión
2. **Explorar productos**: Navega por la colección existente
3. **Crear productos**: Selecciona una categoría y completa el formulario
4. **Gestionar favoritos**: Marca productos como favoritos desde cualquier vista
5. **Ver detalles**: Haz clic en cualquier producto para ver información completa

## Diseño y UX

### Paleta de Colores
- **Dorado principal**: `#D4AF37` - Identidad de marca
- **Azul gradiente**: `#3042B3` a `#6579F7` - Fondo principal
- **Blanco translúcido**: Para tarjetas y elementos UI

### Componentes Interactivos
- **Hover effects** en tarjetas y botones
- **Transiciones suaves** entre estados
- **Estados de carga** con skeletons
- **Mensajes de estado vacío** informativos

### Navegación
- **Navbar persistente** con enlaces principales
- **Botón de retorno** en páginas de detalle
- **Protección automática** de rutas sensibles

## Funcionalidades por Categoría

### Anillos
- Talla (6-20)
- Material (Oro, Plata, Acero)
- Tipo (Alianza, Compromiso, Fashion)

### Aretes
- Tipo (Pendientes, Argollas, Topos)
- Material (Oro, Plata, Fantasía)
- Estado (Nuevo, Usado)

### Dijes
- Tipo (Corazón, Estrella, Iniciales)
- Material (Oro, Plata)
- Tamaño (Pequeño, Mediano, Grande)

### Cadenas
- Largo (40-80 cm)
- Tipo (Correa, V, Serpentina)
- Material (Oro, Plata, Acero)

### Pulseras
- Tipo (Tobillera, Brazalete, Esclava)
- Material (Oro, Plata, Cuero)
- Talla (S, M, L)

### Especial
- Campos personalizables según necesidad
- Descripción detallada
- Estado del producto

## Estados de la Aplicación

### Estados de Carga
- **Skeleton loading** en listados de productos
- **Spinner** en operaciones de guardado
- **Mensajes de progreso** en formularios

### Estados Vacíos
- **"No hay productos"** cuando la colección está vacía
- **"No hay favoritos"** en página de favoritos
- **"Producto no encontrado"** en rutas inválidas

### Estados de Error
- **Validación de formularios** con mensajes específicos
- **Confirmaciones** antes de eliminar productos
- **Redirección automática** en rutas protegidas sin autenticación

## Persistencia de Datos

La aplicación utiliza LocalStorage para mantener la información entre sesiones:

- **`oroapp_productos`**: Colección completa de productos
- **`oroapp_favoritos`**: Lista de IDs de productos favoritos
- **`oroapp_users`**: Datos de usuarios registrados
- **`user`**: Sesión actual del usuario autenticado

## Seguridad y Validación

### Autenticación
- **Registro con email y contraseña**
- **Validación de campos obligatorios**
- **Protección de rutas sensibles**

### Validación de Datos
- **Campos requeridos** en formularios
- **Tipos de datos correctos** (números, texto)
- **Opciones predefinidas** para selects

## Próximas Funcionalidades

- **Sistema de informes avanzado** con exportación PDF
- **Códigos QR** para productos
- **Comparación de productos**
- **Historial de cambios**
- **Sincronización en la nube**

---

**Desarrollado para la gestión elegante de joyería**
