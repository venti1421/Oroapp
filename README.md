# 💎 OroApp

Una aplicación web moderna para la gestión y exploración de productos de joyería. Permite a los usuarios crear, organizar y administrar su colección con una interfaz intuitiva, elegante y escalable.

---

## 🚀 Características Principales

### 📦 Gestión de Productos

* Creación dinámica de productos por categoría
* Atributos específicos según el tipo de joya
* Registro directo desde tarjetas de categoría
* Edición y eliminación de productos

### 🔎 Exploración y Búsqueda

* Búsqueda en tiempo real por descripción
* Filtros independientes por categoría
* Vista en cuadrícula con información resumida

### ⭐ Sistema de Favoritos

* Marcar/desmarcar favoritos desde cualquier vista
* Página dedicada para productos favoritos
* Gestión rápida y sencilla

### 📊 Detalles y Reportes

* Vista detallada de cada producto
* Página de informes (base para futuras mejoras)
* Navegación fluida entre vistas

### 🔐 Sistema de Autenticación

* Registro e inicio de sesión
* Protección de rutas
* Persistencia de sesión en navegador

---

## 🛠️ Tecnologías Utilizadas

* React 19
* Vite
* React Router
* Tailwind CSS
* Context API
* LocalStorage

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── App.jsx
│   ├── Layout.jsx
│   └── ProtectedRoute.jsx
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── FavoriteCard.jsx
│   ├── CategoryCard.jsx
│   └── FormularioDinamico.jsx
├── context/
│   └── AuthContext.jsx
├── data/
│   └── categorias.js
├── hooks/
│   └── useFilter.js
├── pages/
│   ├── Login.jsx
│   ├── Home.jsx
│   ├── Favorites.jsx
│   ├── ProductDetail.jsx
│   └── Informe.jsx
└── services/
    └── productService.js
```

---

## ⚙️ Instalación y Uso

### 📌 Prerrequisitos

* Node.js (16 o superior)
* npm o yarn

### 🔧 Instalación

```bash
git clone <url-del-repositorio>
cd oroapp
npm install
npm run dev
```

### ▶️ Uso

1. Regístrate o inicia sesión
2. Explora productos o crea nuevos desde categorías
3. Filtra y busca fácilmente
4. Marca favoritos
5. Consulta detalles completos

---

## 🎨 Diseño y UX

### 🎨 Paleta de Colores

* Dorado: `#D4AF37`
* Azul gradiente: `#3042B3` → `#6579F7`
* Blanco translúcido para tarjetas

### ✨ Interacciones

* Efectos hover
* Transiciones suaves
* Skeleton loading
* Estados vacíos informativos

---

## 🧩 Funcionalidades por Categoría

Sistema dinámico basado en configuración:

### 🔸 Anillos

* Género: Hombre, Mujer
* Talla: 5 - 12
* Descripción

### 🔸 Aretes

* Tipo de Arete: Topos, Largos, Candongas
* Tamaño: Pequeño, Mediano, Grande
* Descripción

### 🔸 Dijes

* Tamaño: Pequeño, Mediano, Grande
* Descripción

### 🔸 Cadenas

* Largo (cm): 40, 45, 50, 55, 60
* Descripción

### 🔸 Pulsera

* Largo (cm): 18, 19, 20, 22
* Descripción

### 🔸 Especial

* Tipo Especial: Relojes, Tobilleras, Piercing, Herrajes
* Descripción

---

## ⚙️ Sistema de Categorías

* Formularios dinámicos por categoría
* Opciones predefinidas
* Escalable
* Validación automática

---

## 🔄 Estados de la Aplicación

### Estados de Carga

* **Skeleton loading** en listados de productos
* **Spinner** en operaciones de guardado
* **Mensajes de progreso** en formularios

### Estados Vacíos

* **"No hay productos"** cuando la colección está vacía
* **"No hay favoritos"** en página de favoritos
* **"Producto no encontrado"** en rutas inválidas

### Estados de Error

* **Validación de formularios** con mensajes específicos
* **Confirmaciones** antes de eliminar productos
* **Redirección automática** en rutas protegidas sin autenticación

---

## 💾 Persistencia de Datos

La aplicación utiliza LocalStorage para mantener la información entre sesiones:

* **`oroapp_productos`**: Colección completa de productos
* **`oroapp_favoritos`**: Lista de IDs de productos favoritos
* **`oroapp_users`**: Datos de usuarios registrados
* **`user`**: Sesión actual del usuario autenticado

---

## 🔐 Seguridad y Validación

### Autenticación

* **Registro con email y contraseña**
* **Validación de campos obligatorios**
* **Protección de rutas sensibles**

### Validación de Datos

* **Campos requeridos** en formularios
* **Tipos de datos correctos**
* **Opciones predefinidas** para selects

---

## 🔮 Próximas Funcionalidades

* Reportes avanzados con exportación PDF
* Códigos QR
* Comparación de productos
* Historial de cambios
* Sincronización en la nube

---

## 💡 Visión

OroApp es la base para evolucionar hacia un sistema completo de gestión de joyería, incluyendo inventario real, ventas y analítica.

---

**Desarrollado para la gestión elegante de joyería 💎**
