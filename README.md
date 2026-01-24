# Pokedex React App - Prueba Técnica

Esta aplicación es una simulación de una Pokédex desarrollada como parte de una prueba técnica. Permite listar los primeros 251 Pokémon (Generaciones 1 y 2), ver sus detalles y gestionar una lista de favoritos persistente.

🔗 **Demo en Vivo:** [Link_Despliegue](https://pokedex-seven-pi-64.vercel.app)

## Tecnologías Utilizadas

* **React 19 + TypeScript:** Tipado estático fuerte para asegurar la integridad de datos (Modelos definidos en interfaces).
* **Vite:** Build tool para un entorno de desarrollo optimizado.
* **Material UI (MUI):** Framework de diseño para una interfaz limpia, consistente y responsive (Mobile-first).
* **React Router DOM:** Manejo de rutas y navegación SPA.
* **Axios:** Cliente HTTP para consumo de API.
* **LocalStorage:** Persistencia de datos del lado del cliente.

## Arquitectura y Decisiones Técnicas

El proyecto sigue una estructura modular inspirada en patrones de capas, facilitando el mantenimiento y escalabilidad:

### 1. Separación de Responsabilidades

* **`/services`**: Abstracción de la lógica de negocio y llamadas externas. Los componentes de UI no conocen la implementación de la API ni del LocalStorage.
* **`/models`**: Definiciones de tipos (Interfaces) que actúan como contratos de datos, similar a DTOs.
* **`/components`**: Componentes de presentación puros (Dumb components).
* **`/pages`**: Componentes contenedores que gestionan la lógica y el estado.

### 2. UX y Performance

* **Carga Paralela:** Uso de `Promise.all` para obtener detalles de los Pokémon simultáneamente en lugar de secuencialmente.
* **Feedback Optimista:** La interfaz de usuario reacciona inmediatamente a la acción de "Like" mediante estado local, mientras la persistencia ocurre en segundo plano, mejorando la percepción de velocidad.
* **Responsive Design:** Uso de `MUI Grid` con breakpoints configurados para adaptarse fluidamente a Móvil, Tablet y Escritorio.

## Instalación y Ejecución Local

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/GregorioBrc/PokeApi_Test
    ```

2. Instalar dependencias:

    ```bash
    npm install
    ```

3. Ejecutar servidor de desarrollo:

    ```bash
    npm run dev
    ```

## Estructura del Proyecto

```text
src/
├── components/   # Tarjetas, Navegación (UI pura)
├── models/       # Interfaces TypeScript (Pokemon, Stats, etc.)
├── pages/        # Vistas (Home, Details, Favorites)
├── services/     # PokemonService y StorageService
└── App.tsx       # Configuración de Rutas
```
